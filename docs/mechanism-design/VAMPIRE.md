# Vampire Attack Resistance, Multi-Homing

## Problem Statement

A vampire attack in the context of cryptocurrency is a strategy where a new project or protocol, often a fork from an established one, offers improved incentives or rewards to attract users, trading volume, and liquidity from an existing platform. This is done to compete with and potentially outcompete the original project. 

How can the network employ a design to ensure resilience against vampire attacks? A vampire-attack resistant architecture would imply strong properties. 

How can the network employ a design that is resistant to multi-homing tendencies in traditional platforms? For example, drivers and merchants are prone to simaltaneously using many competitive services. In food delivery many restaurants tend to use more than 3 delivery services (DoorDash, UberEats, GrubHub). 
A multi-homing resistant architecture that continuously encourages new entrants to adopt the standard framework (instead of creating a new network) would imply strong / desireable properties.  

___ 

# Goals:
- The design should resist vampire attacks and discourage the multi-homing behavior that plagues web2 platforms.
- The mechanisms should reward providers proportionally to the utility they provide, while also discouraging mass migration and multi-homing.
- Encourage new entrants to adopt the network's framework rather than creating competing networks.

## Potential Mechanisms
Below are some things I am thinking about within the context of the stated problem, but these are probably not mathematically elegant solutions. 

- Implement lock-in periods to prevent immediate withdrawals after receiving incentives. Implement staking rewards 
- Limit the number of tokens that can be withdrawn within a certain timeframe to avoid sudden liquidity drains.
- Generally, development of utility or benefits surrounding the network that make it psychologically discouraging to depart to a new network.
- game theoretic approaches?

## Relevant Links 
- [Multi-Homing](https://www.hbs.edu/ris/Publication%20Files/21-086_a5189999-6335-4890-b050-a59a4b665198.pdf)
