import { Item } from './item.model';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

/* tslint:disable:max-line-length */

export function getTestItems(): Item[] {
  return [
    {
      id: '1234',
      title: 'Judge ordered Capital One hacker Paige Thompson to remain in prison.',
      description: 'A U.S. judge ordered Capital One hacker Paige Thompson to remain in custody pending trial because her “bizarre and erratic” behavior makes the woman at risk. The judge argued that she is a flight risk and poses a physical danger to herself and others.',
      publishedAt: new firebase.firestore.Timestamp(1581295865, 196000000),
      createdAt: new firebase.firestore.Timestamp(1581295865, 196000000),
      modifiedAt: new firebase.firestore.Timestamp(1581295865, 196000000),
      tags: [],
      link: 'https://securityaffairs.co/wordpress/90385/cyber-crime/capital-one-hacker-prison.html',
      enclosure: 'https://i1.wp.com/securityaffairs.co/wordpress/wp-content/uploads/2019/07/capital-one.jpg',
      author: 'Pierluigi Paganini'
    }, {
      id: '1235',
      title: 'Japanese Yen Rides Haven Bids Higher As US China Trade War Reignites',
      description: 'The Japanese Yen has made broad gains which put a key long-term US Dollar uptrend against it in very serious doubt. Month-end will be fascinating for this pair.',
      publishedAt: new firebase.firestore.Timestamp(1581295865, 196000000),
      createdAt: new firebase.firestore.Timestamp(1581295865, 196000000),
      modifiedAt: new firebase.firestore.Timestamp(1581295865, 196000000),
      tags: [],
      link: 'https://www.dailyfx.com/forex/technical/article/fx_technical_weekly/2019/08/26/Japanese-Yen-Rides-Haven-Bids-Higher-As-US-China-Trade-War-Reignites-.html',
      enclosure: 'https://a.c-dn.net/b/2liyP6/headline_Yen-japan-tower2.jpg',
      author: 'David Cottle, Analyst, David Cottle'
    }, {
      id: '1236',
      title: 'Square Crypto Praises Gimmicky Bitcoin Giveaways but Doesn\'t Give Any Away',
      description: 'Square Crypto, the cryptocurrency unit of Jack Dorsey\'s mobile-payment company Square, extolled the virtues of gimmicky bitcoin giveaways. But then it didn\'t offer to give any away. What a crypto tease! Do bitcoin giveaways promote adoption? Basically, Square…',
      publishedAt: new firebase.firestore.Timestamp(1581295865, 196000000),
      createdAt: new firebase.firestore.Timestamp(1581295865, 196000000),
      modifiedAt: new firebase.firestore.Timestamp(1581295865, 196000000),
      tags: [],
      link: 'https://www.ccn.com/square-crypto-bitcoin-giveaway/',
      enclosure: 'https://www.ccn.com/wp-content/uploads/2019/08/bitcoin-giveaway-ss.jpg',
      author: 'Samantha Chang'
    }, {
      id: '1237',
      title: 'I learned to READ my dreams (and you can too)',
      description: 'British model Victoria Aitken said her dreams had always been /\'intense\' but she \'never used to pay them much heed\'. Then, she realised \'they were telling her about the issues she faced in her  life\'.',
      publishedAt: new firebase.firestore.Timestamp(1581295865, 196000000),
      createdAt: new firebase.firestore.Timestamp(1581295865, 196000000),
      modifiedAt: new firebase.firestore.Timestamp(1581295865, 196000000),
      tags: [],
      link: 'https://www.dailymail.co.uk/femail/article-7404131/I-learned-READ-dreams-too.html',
      enclosure: 'https://i.dailymail.co.uk/1s/2019/08/28/21/17803628-0-image-a-131_1567024609120.jpg',
      author: 'By Victoria Aitken for the Daily Mail'
    }
  ];
}
