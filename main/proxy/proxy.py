from urllib import request
import json

class Proxy:
    def __init__(self):
        order = "e745e01eaa500f67b90b01ee47da3425";
        apiUrl = "http://api.ip.data5u.com/socks/get.html?order=" + order + "&json=1&type=1&sep=3"
        req = request.Request(apiUrl)
        response = request.urlopen(req).read()
        response = json.loads(response)
        print(response)
        self.ip = response['data'][0]['ip']
        self.port = response['data'][0]['port']
        self.proxy_ip_port = self.ip+":"+str(self.port)

if __name__ == '__main__':

    proxy = Proxy()
    print(proxy.proxy_ip_port)