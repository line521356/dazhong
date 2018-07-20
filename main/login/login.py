from urllib import request
from bs4 import BeautifulSoup
from main.my_request import my_request
import json
from main.util import const
from http import cookiejar
import ssl
from main.proxy.proxy import Proxy
from main.yima import yima
import time
import re

ssl._create_default_https_context=ssl._create_unverified_context

def send_msg(phone_num,ip_port):
    verify_param = {'param': phone_num, 'captchaChannel': '202',
                    '_token': 'eJx9kn1r2zAQxr+LoPlnItHpxbYCobgkpV4Tp5udQSmlOI6bmjh2sL067dh330mZs47BQKDf3XN+dCf5B6mDDRkTYIxJTSh5zWoTDtnQwahtyBiUAK0dB6SjXErSjzkBXAMl6/rblIwfuGZUuOrRJL5i/ACaMwrMY4+0Z4nMJS5TFWAReWnbQzMejZI0rb6X7XCTJ+UhL7fDtNr3yVH+XCf7bF5t8/IyTYpinaS7ySxp3mzqyapPvcAGXb7JJs9J0WSDQ121VVoVk9M5gzrb5LUNLoR/wa9xdV3316k4+H+bKmwbf4yw7h8LHG8fm/E4aAqOh54nMpfMOZyJ9ypXSI4lUycMCYEEllBV+kzemdwznb5AP+n1LpJbcigIZQmfgNs6kBRAGmKOeRYk0C7Vpgw8ST2bcTl1jQUoRm0fIIBK0yRgu9Jm0EkYS2CKcisxwPdFwF+DmxLHdIK7RJPfZ3MF5op25opwTz5eFb1axfEytJU4F/YchHer2DijKKRHozvfygJD7Mw3Vm1vtcD/F8Um35ZI2edjHO1kczsrl9FNvIwW7/PI48cwDrpV3gbzWb2Yr5NwFd+yZuofF9P7Lpzev+dwHflbX6ovb5/Iz18oJNEa'}
    verify = my_request.my_https_request_json("https://account.dianping.com/account/ajax/captchaShow", ip_port,verify_param, 'POST')
    verify = json.loads(verify)
    print(verify)
    uuid = verify['msg']['uuid']
    msg_param = {'mobileNo': phone_num, 'uuid': uuid, 'type': "304", 'countrycode': '86'}
    html = my_request.my_https_request_json("https://account.dianping.com/account/ajax/mobileVerifySend", ip_port,msg_param, 'POST')
    print(html)

def get_verify_code(phone_num,ip_port):
    send_msg(mobile, p.proxy_ip_port)
    verify_msg = ''
    verify_code = ''
    while True:
        msg = yima.get_phone_msg(mobile)
        if msg != '3001':
            verify_msg = msg
            print(msg)
            break
        time.sleep(2)
    pat = "[0-9]+"
    IC = 0
    IC = re.search(pat, verify_msg)
    verify_code = IC.group()
    print(verify_code)
    return verify_code

def login(phone_num,ip_port):
    verify_code = get_verify_code(mobile, p.proxy_ip_port)
    url = 'https://account.dianping.com/account/ajax/mfastlogin'
    param = {'mobile':phone_num,'vcode':verify_code,'channel':'13','countrycode':'86','type':'304','keepMobile':'off'}
    req = request.Request(url, headers=const.headers)
    cookie = cookiejar.CookieJar()
    handler = request.HTTPCookieProcessor(cookie)
    opener = request.build_opener(handler)
    response = opener.open(req)
    print(response)
    for item in cookie:
        print('Name = %s' % item.name)
        print('Value = %s' % item.value)



if __name__ == '__main__':
    p = Proxy()
    mobile = yima.get_phone_num()
    login(mobile,p.proxy_ip_port)

