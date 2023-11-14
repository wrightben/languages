import sys
import json

'''
# Example Data and Parse

# https://api.coindesk.com/v1/bpi/currentprice.json

res = '{"time":{"updated":"Jul 28, 2023 03:08:00 UTC","updatedISO":"2023-07-28T03:08:00+00:00","updateduk":"Jul 28, 2023 at 04:08 BST"},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org","chartName":"Bitcoin","bpi":{"USD":{"code":"USD","symbol":"&#36;","rate":"29,202.4969","description":"United States Dollar","rate_float":29202.4969},"GBP":{"code":"GBP","symbol":"&pound;","rate":"24,401.3728","description":"British Pound Sterling","rate_float":24401.3728},"EUR":{"code":"EUR","symbol":"&euro;","rate":"28,447.4955","description":"Euro","rate_float":28447.4955}}}'

res = json.loads(res)
'''


# Load data from STDIN
# cat json.txt | python3 jsonf.py
res = []
for line in sys.stdin:
	res.append(line)


print(json.dumps( json.loads("".join(res)), indent=2 ))