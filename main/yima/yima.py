from urllib import parse, request
import time

TOKEN = '0050541770e978fac9577dfe1f82e632849312d2'
ITEMID = '160'
URL = 'http://api.fxhyd.cn/UserInterface.aspx'

def get_phone_num(isp='',province='',city='',mobile=''):
    url = URL+"?action=getmobile&token="+TOKEN+"&itemid="+ITEMID+"&isp="+isp+"&province="+province+"&city="+city+"&mobile="+mobile
    req = request.Request(url)
    response = request.urlopen(req).read()
    response = response.decode('utf-8')
    return response.split('|')[1]

def get_phone_msg(mobile):
    url = URL + "?action=getsms&token=" + TOKEN + "&itemid=" + ITEMID  + "&mobile=" + mobile
    req = request.Request(url)
    response = request.urlopen(req).read()
    response = response.decode('utf-8')
    return response

if __name__ == '__main__':
    mobile = get_phone_num()
    print(mobile)
    while True:
        msg = get_phone_msg(mobile)
        if msg != '3001':
            print(msg)
            break
        time.sleep(2)



