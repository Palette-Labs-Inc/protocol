# Verification

## Problem Statement
How can the network securely and reliably verify the accuracy and integrity of data from providers without relying on trusted parties, or adding permissions?

## Goal:
Please draft specific solution(s) that solves the common DePIN verification problems below.
___ 

## Self-Dealing
We decided in previous conversations that we would make self-dealing unprofitable by having providers earn less than users pay. However some networks have grown quickly because of early subsidies — making it profitable to buy services from yourself. There are real tradeoff's here but I think it could be worth revisiting. 

Many projects mint tokens based on a simple exponential decay model. Under this model, rewards are highest in the beginning, so mining generates many tokens per unit of work early in the networkʼs life. Because we do not implement the simple expoenential decay model, the network could be subject to vampire attacks that introduce better rewards early on.

Ultimately, I think out network design (where self-dealing is not profitable), is more sustainable but this could be considered a vulnerability.

### Detecting and Penalizing Self-Dealing: 
Is there an algorithmic way to detect self-dealing? 

### Rewarding Genuine Contributions: 
Through the verification process, we can reward providers based on the genuine value they add to the network. This includes allocating rewards both for the completion of service requests but also for meeting quality and performance standards. 

### Establishing Trust and Accountability: 
Providers are aware that their services are subject to verification, which discourages dishonest practices like self-dealing and encourages adherence to network standards and protocols.

### Technical challenges / questions
- How do we make it less profitable to self-deal? 
- Can we introduce a software-based random sampling approach to verification? 
- How to ensure that the expected utility of honest behavior outweighs the potential gains from self-dealing?
- Do we need to build a reputation system? If so, any ideas on what this should look like? 
- How to quantify trust? How to improve discoverability of providers within the network based on consistent historical performance? 
- How to further discourage self-dealing by making it *less profitable* compared to providing legitimate services?
___ 

## Lazy Providers
lazy providers who commit to serving requests but simply don’t respond, or respond with a low quality of service. 

### Service Integrity
Confirming that the services provided by network participants match the descriptions and standards advertised. This includes validating the execution of tasks and the availability of services without adding any permissioned registration process or human intervention.

### Performance Metrics
Ensuring that the performance of the services, such as throughput, latency, availability, and reliability, meets or exceeds the networks predefined thresholds. These metrics are critical in consumer facing services where performance directly impacts user experience and satisfaction. 

### Compliance with Protocols
Verifying that participants are complying with the network's operational and communication standatds, including security standards, data handling, etc.

### Technical challenges / questions
- Do we need to add a concept of a network validator? What's the mechanism for validating service? What's the reward for validating service?
- How do we ensure the performance proof is verifiable and not tampered? 
- What is the formal verification method to prove the correctness and performance of the service of node operators? - Possible to introduce self-verification of protocol compliance using ZK?
- ZK SNARK technique for proving a node's adoption of the protocol specification. 
    - allow for permissionless self-verification process.
    - allows for credibly neutral standard and network adoption.
    - Run the equivalent of  [interop test files](https://github.com/bluesky-social/atproto/tree/main/interop-test-files) in bluesky and submit a ZK proof to update the status of the deployed node. 

___

## Malicious Actors: 
A scenario where a provider, as part of the network, intentionally provides false or harmful information in responses. This provider could even be ready to incur a financial loss if it means successfully delivering misleading information. The motivation behind such behavior could be to undermine the network. DoorDash might want to do this to impose an unreliable service. One way to avoid this is to introduce a permissioned registration process, but this is not ideal.  

### Technical challenges / questions:
- What mechanisms can be implemented to ensure that acting maliciously has a proportional economic penalty? 
- Is it feasible to create a decentralized dispute resolution system that allows the network to adjudicate claims of malicious behavior?

___

## Relevant Links

[Engineering Filecoin’s economy](https://filecoin.io/2020-engineering-filecoins-economy-en.pdf)

[Orchid Whitepaper](https://www.orchid.com/whitepaper/english.pdf)

[Helium Whitepaper](http://whitepaper.helium.com/)

[Helium Proof of Coverage](https://docs.helium.com/iot/proof-of-coverage/)

[Nym whitepaper](https://nymtech.net/nym-whitepaper.pdf)

## Additional Context
Existing software approaches like consensus and validity proofs aren’t feasible in certain real-world commercial settings. Some projects have explored the idea of random sampling as a measurement method to ensure that rational participants in a network are behaving in accordance with the protocol.

A random sampling approach to verification usually involves the network generating measurement requests to each provider/validator on the network. If the measurement request is correctly served, the provider receives a larger reward. As long as the provider can’t distinguish between a measurement request and a normal request, they should be incentivized to correctly respond to each request.

