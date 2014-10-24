__author__ = 'Tom'

import os

application_config = {
    'template_path' : os.path.abspath(os.path.join(os.path.dirname(__file__), 'templates')),
    'database_connection' : {
        'host' : '',
        'username': '',
        'password': '',
        'database_name': ''
    },
    'debug': True,
    'base_currency': 'GBP',
    'convert_to_base_currency': True  # WARNING: SLOW
}

cherrypy_config = {
         'global': {
                'server.socket_host': '0.0.0.0',
                'server.socket_port': 8080
            },
        '/':
            {
                'environment': 'embedded',
                'tools.trailing_slash.on': True,
                'request.show_tracebacks': application_config['debug'],
                'tools.encode.on': True,
                'tools.encode.encoding': 'utf-8',
                'tools.encode.text_only': False,
            }
    }

charities = {
    'test': {
        'name': 'test',
        'bank_id': 'gls',
        'account_id': 'fairnopoly-geschaftskonto'
    }
}