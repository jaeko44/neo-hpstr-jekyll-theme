---
title: How to Launch Debian Jessie in VirtEngine
layout: post
og_image_url: "https://blog.virtengine.com/res/gotalk-intro.png"
description: How to Launch Debian Jessie in VirtEngine
---

### Introduction

Debian is a Unix-like computer operating system that is composed entirely of free software, most of which is under the GNU General Public License, and packaged by a group of individuals known as the Debian. Three main branches are offered: Stable, Testing and Unstable.

This tutorial will guide you in launching Debian Jessie in VirtEngine.

<a href="https://console.VirtEngine.com" target="_blank">
 

###Prerequisites

* You are running Ubuntu 14.04 or Linux workstation.

* Git installed on your server, which you can do by following the [How To Install Git with Apt.](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-14-04)

* An account on GitHub, which is a Git repository host.
To follow this tutorial :

* You have to create a valid credential for accessing https://console.VirtEngine.com. [How to create an account with VirtEngine](https://blog.virtengine.com/2016/05/27/how-to-launch-ubuntu/)

You have to install openssh-server for ssh access.

	$ sudo apt-get install openssh-server

To check the ssh is properly installed in our system

	$ ps aux | grep sshd

###Step - 1 Creating Debian Jessie VM

This initial section contains everything you need to get Debian Jessie and running on your server.

First, ensure the user can login to https://console.VirtEngine.com.  

* Go to the Market Place.

* Select the Debian, A window will pop up with for CPU, storage, RAM and SSHkey options.

* You can choose the storage size and RAM capacity.

* You can create a new sshkey, use an existing sshkey or import your own sshkeys too.

* Click the create button. it will create the virtual machine.

###Step - 2 Access the Debian Jessie VM Machine

Next, Go to the Dashboard and click the domain name a new window will open.

* It contains the CPU, RAM and Network tab.

* It shows the Metrics, VM Logs, IP address and SSH URL.

* Metrics shows the CPU,RAM and Network usage.

* VM Logs shows all the running process in VM.

* You need to access the Virtual Machine from a terminal.

* You can download the SSH Keys from SSH Keys tab or Overview page. Use this key to login to your virtual machine using the following command,

	    $ ssh -i path to/<private_key filename> root@<ipaddress>


###Conclusion

These are the very simple steps to launch Debian Jessie virtual machine. This is a good head-start for launching a Debian Jessie in VirtEngine.

###Deploy debian jessie now

<a href="https://console.VirtEngine.com" target="_blank">
 
