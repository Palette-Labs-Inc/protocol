### Universal Transaction Protocol

#### Abstract

The Universal Transaction Protocol(UTP) is a decentralized food delivery protocol based upon the [schema markup] (https://schema.org) data format. It provides a client to server API for placing, editing, confirming, and tracking an order as well as a federated server to server API for information communication.

#### 1. Overview

UTP provides two layers:
* A server to server federation protocol (so information can flow between the decentralized network)
* A client to server protocol (so users, including customers, couriers, and sellers can fulfill the transaction using their accounts on servers, from mobile apps or web apps)


In UTP, a user is represented by "actors" via user's accounts on servers. Users' accounts on different servers correspond to different actors. There are different user types:
* customer: end user who wants to order. 
* seller(local business): refers to restaurants, cafes, or other businesses that offer their items for delivery through the system. 
* courier: the delivery personnel who are responsible for picking up orders from sellers and delivering them to customers. 
* Node Operator: user manages the overall operation of the server. 

In federated delivery systems, actors interact with local servers by placing orders, editing menus, tracking deliveries, etc. Actors can also interact with remote servers via the federated protocol and retrieve information.

#### 2. Conformance

This specification defines two closely related and interacting protocols:

## A client to server protocol
This protocol permits a client to act on behalf of a user. For example, this protocol is used by a mobile phone application to interact with the local server.

## A server to server protocol
This protocol is used for information retrieval among different servers.

#### 3. Objects

Objects are the core concept around which the UTP is built. Core objects in the system includes Customer, LocalBusiness, Courier, Node, Menu, MenuItem, Order. Objects are often wrapped in Activities and stored in database as tables. Details of objects, including properties, types, and descriptions are specified in the data schema documents. 

### 3.1 Object Identifiers

All objects distributed by the UTP must have unique global identifier. 

### 3.2 Retrieving objects

The HTTP GET method may be dereferenced against an object's id property to retrieve the activity. Servers may use HTTP content negotiation to select the type of data to return in response to a request, but must present the object representation in response to "application/ld+json" and the context defined as "@context": "https://schema.org";

### 3.3 The source property

The source property is intended to convey some sort of source from which the content markup was derived, as a form of provenance, or to support future editing by clients. In general, clients do the conversion from source to content, not the other way around. 

#### 4. Actors

There are four types of actors representing users in the UTP. Properties, types, and descriptions are specified in the data schema documents.

* customer: end user who wants to order. They interact with the system to browse menus, place orders, make payments, and track the status of their orders. Customers may have profiles to save their preferences, delivery addresses, and payment information for convenience.
* seller(local business): refers to restaurants, cafes, or other businesses that offer their items for delivery through the system. Sellers manage their menus, update availability, receive and process orders, and communicate with customers. They may also have access to order management tools, inventory tracking, and sales analytics.
* courier: the delivery personnel who are responsible for picking up orders from sellers and delivering them to customers. They are assigned delivery requests based on their availability and proximity to the seller and customer locations. Couriers may have their profiles with information such as their availability, ratings, and delivery history. They use the system to view delivery details, navigate to the pick-up and drop-off locations, update order statuses, and communicate with customers or sellers if needed.
* Node Operator: user manages the overall operation of the server. A node operator could be an aggregator (bazzar) of many sellers and support different types of actors' activities, like the commonly-seen food delivery services such as Grubhub. It could also support activities of a single type of actors. UTP provides microservices relevant to different node operators, including buyer supporting microservices, seller supporting microservices, and courier supporting microservices.

#### 5. Client to Server Interactions

The client to server interactions are represented by the following for APIs.

### Order Lifecycle APIs

The APIs are broadly applicable to all commercial transactions. These APIs represent a standard order lifecycle. There are four stages in the order lifecycle, including Explore, Purchase, Fulfill and Post-fulfill APIs. 

### 5.1 Explore API

This is the stage where a customer searches or explores the product(s) or service(s) they intend to purchase from a seller. The Explore API enables a customer to query the network. The Explore API has a callback mechanism that returns a bazaar which includes a selection of sellers offering the intended product(s) or service(s). The Explore API also enables sellers list their menus and update information for customer to search. 

## 5.1.1 Buyer Activities

* search
    * location
    * open_hours
    * menu
    * menu_item

## 5.1.2 Seller Activities

* menu_create
* menu_delete
* menu_update
* menu_item_create
* menu_item_remove
* menu_item_delete

### 5.2 Purchase API

This is the stage where the customer creates an order for the selected product(s) or service(s). The customer selects the menu item(s) and/or offer(s) they plan to purchase from the seller. The customer then creates an order and the server responds with a quote. 

## 5.2.1 Buyer Activities

* order_create
* order_submit
* order_update
* order_cancel

## 5.2.2 Seller Activities

* order_quote
* order_confirm
* order_update
* order_cancel

### 5.3 Fulfill API

This is the stage where the seller processes the order, packages the product(s), and if applicable, ships them to the customer’s specified delivery address.

## 5.3.1 Buyer Support Activities

* status_query
* track_query

## 5.3.2 Seller Support Activities

* status_update
* track_update
* inventory_update

## 5.3.3 Courier Support Activities

* delivery_confirm
* delivery_cancel
* status_update
* track_update

### 5.4 Post-fulfill API

This is the stage where the customer receives the order(s), and inspects the item(s). In this stage, the customer may provide feedback, require customer support, or initiate a return/refund if dissatisfied depending on the policies created by the transacting Nodes. 

## 5.4.1 Buyer Support Activities

* rate_order
* rate_delivery
* require_support

## 5.4.2 Seller Support Activities

* handle_rating
* handle_support

## 5.4.3 Courier Support Activities

* handle_rating
* handle_support

#### 6. Server to Server Interactions

The server to server interactions follows the communication defined by SMTP. The basic commands in server to server interactions are:

* HELO
* MAIL
* RCPT
* DATA
* QUIT

