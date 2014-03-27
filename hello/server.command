#!/bin/bash
cd $( dirname "${BASH_SOURCE[0]}" );
/usr/bin/env python -m "SimpleHTTPServer" 8000
