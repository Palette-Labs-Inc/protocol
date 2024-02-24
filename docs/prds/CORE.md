## Overview
For a detailed overview of the agents within this system, please review [Core Architecture RFC 00001](../rfcs/00001-core-architecture.md) 
___

# Questions

## Measuring Contributions
- How do tokens accrue to each of the agents within the network? I really like the graph theoretic approach that we have established. I think we also need to extend token distributions to the other service providers. 


## Monetary Policy
- How and when are tokens minted and issued? 


## Utility
- How are tokens used within the network after they are received? If all recipients simply spend their tokens, this will have negative pricing pressures on the network. 

## Reputation

- When a `BSN` communicates with a `PSN`, how can each Node have assurances that the service that is being requested will be fulfilled? One way to establish trust is to have a "registrar" where we (Nosh) serve the role of "approving" applicants to join the registry (and hence we permit which service providers can be discovered by the network). However, this adds permissions and goes against our values of designing a credibly neutral protocol. A game theoretic approach would be much better. What mechanisms can perform this task? You could imagine that, during each transaction between a buyer and a seller, there is an "escrow contract" that resolves after a transaction is fulfilled. This requires consensus from both the buyer and the seller which begs the question of how disputes are handled. 

- Is there an economic punishment for failing to fulfill a service? 

- If a buyer complains about the quality of service (requesting a refund, for example) what is our dispute or resolution protocol? How can this protocol be trustless (not require an intermediary arbiter)? 

