__author__ = 'Tom'

import json
import cherrypy
import requests
from bs4 import BeautifulSoup

from config import *


def get_base_currency_value(currency, value, date):
    date = date[:10]  # DANGEROUS
    currency_conversion_url = "http://www.xe.com/currencytables/?from={currency}&date={date}"  # date format 2014-10-24
    try:
        r = requests.get(currency_conversion_url.format(currency=currency.upper(), date=date))
    except:
        pass  # TODO: handle better
        return

    soup = BeautifulSoup(r.text)

    table = soup.find("table", {"id": "historicalRateTbl"})

    for row in table.findAll('tr'):
        cols = row.findAll('td')
        if len(cols) > 0:
            if cols[0].text == application_config['base_currency']:
                try:
                    return float(value) * float(cols[2].text)
                except TypeError:
                    pass  # TODO: handle better
                    return

    return


def make_transaction(value, currency, date, other_party=None):
    if float(value) < 1:
        value = str(float(value) * -1)

    if application_config['convert_to_base_currency']:
        base_currency_value = "{0:.2f}".format(get_base_currency_value(currency, value, date)) if (not currency == application_config['base_currency']) else value
    else:
        base_currency_value = None

    return {
        'other_party': other_party,
        'date': date,
        'original_currency': currency,
        'original_value': value,
        'base_currency_value': base_currency_value,
    }


def get_transactions_for_charity(charity_name):
    output_dict = get_transactions_for_account(charities[charity_name]['bank_id'], charities[charity_name]['account_id'])
    output_dict['charity_name'] = charities[charity_name]['name']
    output_dict['base_currency'] = application_config['base_currency']
    return output_dict


def get_transactions_for_account(bank_id, account_id):
    open_bank_transaction_url = 'https://api.openbankproject.com/obp/v1.2.1/banks/{bank_id}/accounts/{account_id}/public/transactions'
    r = requests.get(open_bank_transaction_url.format(bank_id=bank_id, account_id=account_id))

    incoming_transactions = []
    outgoing_transactions = []

    if not r.status_code == 200:
        pass  # TODO: handle better
    else:
        data = r.json()
        try:
            for transaction in data['transactions']:
                value = transaction['details']['value']['amount']
                currency = transaction['details']['value']['currency']
                date = transaction['details']['completed']
                other_person = transaction['other_account']['holder']['name']

                output_transaction = make_transaction(value, currency, date, other_person)

                if float(value) > 0:  # incoming
                    incoming_transactions.append(output_transaction)
                else:  # outgoing
                    outgoing_transactions.append(output_transaction)
        except KeyError:
            pass  # TODO: handle better

    return {
        'outgoing_transactions': outgoing_transactions,
        'incoming_transactions': incoming_transactions
    }


class Root(object):
    def transactions_for_charity(self, charity_name):
        cherrypy.response.headers['Content-Type'] = 'application/json'
        return json.dumps(get_transactions_for_charity(charity_name), ensure_ascii=False)

    transactions_for_charity.exposed = True

cherrypy.quickstart(Root(), '/', cherrypy_config)
