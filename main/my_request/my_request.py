from urllib import request
import ssl
import gzip
import uuid
from urllib import parse
from http import cookiejar
import json
from main.util import const
from main.proxy.proxy import Proxy

ssl._create_default_https_context=ssl._create_unverified_context

def my_https_request_json(url,ip_port,param,method='GET'):
    proxy_handler = request.ProxyHandler({'http': ip_port})
    opener = request.build_opener(proxy_handler)
    request.install_opener(opener)
    if method == 'GET':
        req = request.Request(url,headers=const.headers)
    else:
        req = request.Request(url,headers=const.headers,data=parse.urlencode(param).encode('utf-8'))

    response = request.urlopen(req).read()
    return response.decode('utf-8')


if __name__ == '__main__':
    p = Proxy()
    verify_param = {'param':'17046691645','captchaChannel':'202','_token':'eJx9kn1r2zAQxr+LoPlnItHpxbYCobgkpV4Tp5udQSmlOI6bmjh2sL067dh330mZs47BQKDf3XN+dCf5B6mDDRkTYIxJTSh5zWoTDtnQwahtyBiUAK0dB6SjXErSjzkBXAMl6/rblIwfuGZUuOrRJL5i/ACaMwrMY4+0Z4nMJS5TFWAReWnbQzMejZI0rb6X7XCTJ+UhL7fDtNr3yVH+XCf7bF5t8/IyTYpinaS7ySxp3mzqyapPvcAGXb7JJs9J0WSDQ121VVoVk9M5gzrb5LUNLoR/wa9xdV3316k4+H+bKmwbf4yw7h8LHG8fm/E4aAqOh54nMpfMOZyJ9ypXSI4lUycMCYEEllBV+kzemdwznb5AP+n1LpJbcigIZQmfgNs6kBRAGmKOeRYk0C7Vpgw8ST2bcTl1jQUoRm0fIIBK0yRgu9Jm0EkYS2CKcisxwPdFwF+DmxLHdIK7RJPfZ3MF5op25opwTz5eFb1axfEytJU4F/YchHer2DijKKRHozvfygJD7Mw3Vm1vtcD/F8Um35ZI2edjHO1kczsrl9FNvIwW7/PI48cwDrpV3gbzWb2Yr5NwFd+yZuofF9P7Lpzev+dwHflbX6ovb5/Iz18oJNEa'}
    verify = my_https_request_json("https://account.dianping.com/account/ajax/captchaShow",p.proxy_ip_port,verify_param,'POST')
    verify = json.loads(verify)
    print(verify)
    uuid = verify['msg']['uuid']
    msg_param = {'mobileNo':"17046691645",'uuid':uuid,'type':"304",'countrycode':'86'}
    html = my_https_request_json("https://account.dianping.com/account/ajax/mobileVerifySend",p.proxy_ip_port, msg_param, 'POST')
    print(html)