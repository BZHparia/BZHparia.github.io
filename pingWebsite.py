# -*- coding: utf-8 -*-
"""
Created on Tue Dec 28 00:41:15 2021

@author: theod
"""


# import urllib.request as urllib2
# import socket
# import string
# import random

# URL = 'https://disk.yandex.ru/i/EyD697AdIKHvaw'

# baseUrl = 'https://disk.yandex.ru/i/'

# def id_generator(size=14, chars=string.ascii_lowercase + string.ascii_uppercase + string.digits):
#     return ''.join(random.choice(chars) for _ in range(size))

# def urlIsUp(url):
#     try:
#         urllib2.urlopen(url, timeout = 1)
#         return True
#     except urllib2.URLError as e:
#         # print(type(e))
#         return False
#     except socket.timeout as e:
#         # print(type(e))
#         return False

# def run():
#     goodUrl = []
#     counter = 0
#     while(True):
#         counter += 1
#         url = baseUrl + id_generator()
#         if urlIsUp(url):
#             goodUrl.append(url)
#             print(url,"✔️")
#         else:
#             print(url,"❌")
#         if len(goodUrl) != 0:
#             print(goodUrl)
#         print(counter)
#         if counter%100 == 0:
#             if urlIsUp(URL):
#                 print('Service UP')
#             else:
#                 print('Service DOWN')



import threading
import time


exitFlag = 0

class myThread (threading.Thread):
   def __init__(self, threadID, name, counter):
      threading.Thread.__init__(self)
      self.threadID = threadID
      self.name = name
      self.counter = counter
   def run(self):
      print ("Starting " + self.name)
      print_time(self.name, 5, self.counter)
      print ("Exiting " + self.name)

def print_time(threadName, counter, delay):
   while counter:
      if exitFlag:
         threadName.exit()
      time.sleep(delay)
      print(threadName, ":", time.ctime(time.time()))
      counter -= 1

# Create new threads
thread1 = myThread(1, "Thread-1", 1)
thread2 = myThread(2, "Thread-2", 2)

# Start new Threads
thread1.start()
thread2.start()

print ("Exiting Main Thread")