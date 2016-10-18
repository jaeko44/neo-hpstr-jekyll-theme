---
title: Getting started Atharva storage in VirtEngine
layout: post
og_image_url: "https://blog.virtengine.com/res/gotalk-intro.png"
description: Getting started Atharva storage in VirtEngine
---

### Introduction
**Atharva Storage** - VirtEngine is a "Cloud object storage, low latency and (S3 - AWS Signature v2) compatible API  built on top of ceph - jewel.".

This tutorial will guide you creating atharva storage  in VirtEngine.
<a href="https://console.VirtEngine.com" target="_blank">
 

### Prerequisites

* You have to create a valid credential for accessing https://console.VirtEngine.com. [How to create an account with VirtEngine](https://blog.virtengine.com/2016/05/27/how-to-launch-ubuntu/).

### Create Atharva storage in VirtEngine

* First, ensure the user can login to https://console.VirtEngine.com.

* Upon successful signin, look for the icon
![](https://blog.virtengine.com/content/images/2016/06/storage-1.jpg)
 at the top right hand corner named `Storage`
![](https://blog.virtengine.com/content/images/2016/06/atharva-1.jpg)

* Click the `create storage` box. A window will pop up and ask for Bucket Name. You can type a name for the bucket.

* Bucket is successfully created and also its created the `access-key` and `secret-key` for your account.

<<<<<<< HEAD
* You can see your Access-key and Secret-key from your profile page in MegamAfrica (https://console.megamafrica.com).
![](https://blog.virtengine.com/content/images/2016/06/storage-keys.jpg)
=======
* You can see your Access-key and Secret-key from your profile page in VirtEngine (https://console.VirtEngine.com).
![](https://blog.virtengine.com/content/images/2016/06/storage-keys.jpg)
>>>>>>> edd09ed781f1d9a6cf21e54fb8fa40454fe5e504

* Now, You can upload a files in `Atharva Storage` using your Access-key and Secret-key.

* Upload a files using windows and ubuntu using following guide.

[How to upload a files from windows to VirtEngine](https://blog.virtengine.com/2016/06/16/atharva-ceph-windows/).

[How to deploy private docker registry in VirtEngine](https://blog.virtengine.com/2016/06/10/private-registry-along-with-ceph/).

* Let us verify if the files is uploaded

Logon https://console.VirtEngine.com goto `storage` place. You can see your bucket, and the uploaded files are displayed.

### Conclusion

These are the very simple steps to create an atharva storage in VirtEngine. VirtEngine website contain lot of feature - very easy to launch Virtual Machines, Apps, Services,and providing atharva storage in VirtEngine.

###### Deploy a Atharva storage now

<a href="https://console.VirtEngine.com" target="_blank">
 
