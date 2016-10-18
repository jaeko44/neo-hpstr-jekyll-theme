---
title: How to launch DockerContainer in VirtEngine
layout: post
og_image_url: "https://blog.virtengine.com/res/gotalk-intro.png"
description: How to launch DockerContainer in VirtEngine
---


#### Introduction
Docker containers wrap up a piece of software in a complete filesystem that contains everything it needs to run: code, runtime, system tools, system libraries – anything you can install on a server. This guarantees that it will always run the same, regardless of the environment it is running in.

This tutorial will guide you launching a Docker Container in VirtEngine.

<a href="https://console.VirtEngine.com" target="_blank">
 


#### Prerequisites

* You are running Ubuntu 14.04 or Linux workstation.

* Git installed on your workstation, which you can do by following the [How To Install Git with Apt.](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-14-04)

*  You have an account on GitHub, which is a Git repository host.

* You have to create a valid credential for accessing https://console.VirtEngine.com. [How to create an account with VirtEngine](https://blog.virtengine.com/2016/05/27/how-to-launch-ubuntu/)

* You have to install openssh-server for ssh access.

    	sudo apt-get install openssh-server

* To check the ssh is properly installed in our system

      	ps aux | grep sshd

#### Step - 1  Launch DockerContainer

 This initial section contains everything you need to get  docker container and running on your server.

 * Go to your VirtEngine Dashboard.

 * Click Marketplace on the top bar.Marketplace contains all the linux distros, applications, services and microservices which VirtEngine supports.

 * Click DockerContainer Icon.

 * Give the docker hub image name.

      For example jenkins

 * To launch DockerContainer Click Create button.

 * Now you have launched your dockercontainer.
#### Step - 2 Access the DockerContainer

Next, Go to the Dashboard and click the domain name a new window will open.

It contains the CPU, RAM and Network tab.

It shows the Metrics, VM Logs, IP address and SSH URL.

Metrics shows the CPU,RAM and Network usage.

Container Logs shows all the running process in DockerContainer.

#### Step - 3 Open Your web browser

You can access your web page using https://IP_ADDRESS:8080



![](https://blog.virtengine.com/content/images/2016/05/jenkins1.png)

#### Conclusion

Finally These are the steps in launched the docker container in successfully.


<a href="https://console.VirtEngine.com" target="_blank">
 
