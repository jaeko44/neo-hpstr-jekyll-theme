---
title: How to launch Redis in VirtEngine
layout: post
og_image_url: "https://blog.virtengine.com/res/gotalk-intro.png"
description: How to launch Redis in VirtEngine
---

### Introduction

Redis is an open source (BSD licensed), in-memory data structure store, used as database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.

This tutorial will guide you in launching Redis.

<a href="https://console.VirtEngine.com" target="_blank">
 


### Prerequisites

* You are running Ubuntu 14.04 or Linux workstation.

* Git installed on your server, which you can do by following the How To Install Git with Apt.

* An account on GitHub, which is a Git repository host.


* You have to create a valid credential for accessing https://console.VirtEngine.com. [How to create an account with VirtEngine](https://blog.virtengine.com/2016/05/27/how-to-launch-ubuntu/)

You have to install openssh-server in your linux machine for ssh access.

	$ sudo apt-get install openssh-server

To check the ssh is properly installed in our system

	$ ps aux | grep sshd

### Step - 1 Creating Redis

This initial section contains everything you need to get Redis and running on your server.

* First, ensure the user can login to our console.VirtEngine.com

* Go to the Market Places.

* Select the Redis, A window will pop up with for CPU, storage, RAM and SSHkey options.

* You can choose the storage size and RAM capacity.

* You can create a new sshkey, use an existing sshkey or import your own sshkeys too.

* Click the create button. it will create the virtual machine.

### Step - 2 Accessing Redis

Next, Go to the Dashboard and click the domain name a new window is open.

* It contains the CPU, RAM and NETWORK tab.

* It shows the Metrics, VM Logs, IP address and SSH URL.

* Metrics shows the CPU,RAM and NETWORK usage.

* VM Logs shows all the running process in VM.

* You need to access the Virtual Machine from a terminal.

* You can download the SSH Keys from SSH Keys tab or Overview page. Use this key to login to your virtual machine using the following command,

 		$ ssh -i path to/<private_key filename> root@<ipaddress>

* Now, you are login into vm then start the Redis use the following command

		$ redis-server

* Check if Redis is working properly is sending a PING command using redis-cli:

    	$ redis-cli ping
		PONG

Successfully launched the vm and login into Redis.

### Conclusion

These are the very simple steps to launch Redis in virtual machine.This is a good head-start for launching Redis in VirtEngine.

### Deploy Redis service

<a href="https://console.VirtEngine.com" target="_blank">
 
