// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import GraphqlHandler from "@graphql-mesh/graphql"
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import type { UniswapV2Context } from './sources/uniswap-v2/types';
import type { CommonGoodContext } from './sources/common-good/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: bigint;
  Bytes: any;
};

export type Query = {
  uniswapFactory?: Maybe<UniswapFactory>;
  uniswapFactories: Array<UniswapFactory>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  uniswapDayData?: Maybe<UniswapDayData>;
  uniswapDayDatas: Array<UniswapDayData>;
  pairHourData?: Maybe<PairHourData>;
  pairHourDatas: Array<PairHourData>;
  pairDayData?: Maybe<PairDayData>;
  pairDayDatas: Array<PairDayData>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  factoryRecord?: Maybe<FactoryRecord>;
  factoryRecords: Array<FactoryRecord>;
  commonGoodCreatedEvent?: Maybe<CommonGoodCreatedEvent>;
  commonGoodCreatedEvents: Array<CommonGoodCreatedEvent>;
  pledgeEvent?: Maybe<PledgeEvent>;
  pledgeEvents: Array<PledgeEvent>;
  pledgeWithdrawnEvent?: Maybe<PledgeWithdrawnEvent>;
  pledgeWithdrawnEvents: Array<PledgeWithdrawnEvent>;
  metadataUpdatedEvent?: Maybe<MetadataUpdatedEvent>;
  metadataUpdatedEvents: Array<MetadataUpdatedEvent>;
  announcementEvent?: Maybe<AnnouncementEvent>;
  announcementEvents: Array<AnnouncementEvent>;
  nextMilestoneStartedEvent?: Maybe<NextMilestoneStartedEvent>;
  nextMilestoneStartedEvents: Array<NextMilestoneStartedEvent>;
  projectSucceededFundraisingEvent?: Maybe<ProjectSucceededFundraisingEvent>;
  projectSucceededFundraisingEvents: Array<ProjectSucceededFundraisingEvent>;
  projectFailedFundraisingEvent?: Maybe<ProjectFailedFundraisingEvent>;
  projectFailedFundraisingEvents: Array<ProjectFailedFundraisingEvent>;
  fundsClaimedEvent?: Maybe<FundsClaimedEvent>;
  fundsClaimedEvents: Array<FundsClaimedEvent>;
  commonGoodEventRecord?: Maybe<CommonGoodEventRecord>;
  commonGoodEventRecords: Array<CommonGoodEventRecord>;
  milestoneRecord?: Maybe<MilestoneRecord>;
  milestoneRecords: Array<MilestoneRecord>;
  commonGoodRecord?: Maybe<CommonGoodRecord>;
  commonGoodRecords: Array<CommonGoodRecord>;
  pledgeEventRecord?: Maybe<PledgeEventRecord>;
  pledgeEventRecords: Array<PledgeEventRecord>;
  pledgeRecord?: Maybe<PledgeRecord>;
  pledgeRecords: Array<PledgeRecord>;
  eoaEventRecord?: Maybe<EoaEventRecord>;
  eoaEventRecords: Array<EoaEventRecord>;
  eoaRecord?: Maybe<EoaRecord>;
  eoaRecords: Array<EoaRecord>;
};


export type QueryuniswapFactoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniswapFactory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapFactory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type QueryfactoryRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfactoryRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FactoryRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FactoryRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycommonGoodCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycommonGoodCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommonGoodCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CommonGoodCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypledgeEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypledgeEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypledgeWithdrawnEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypledgeWithdrawnEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeWithdrawnEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeWithdrawnEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymetadataUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymetadataUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetadataUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetadataUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryannouncementEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryannouncementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnouncementEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AnnouncementEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynextMilestoneStartedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynextMilestoneStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NextMilestoneStartedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NextMilestoneStartedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectSucceededFundraisingEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectSucceededFundraisingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectSucceededFundraisingEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectSucceededFundraisingEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectFailedFundraisingEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectFailedFundraisingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectFailedFundraisingEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectFailedFundraisingEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfundsClaimedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfundsClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundsClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FundsClaimedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycommonGoodEventRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycommonGoodEventRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommonGoodEventRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CommonGoodEventRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymilestoneRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymilestoneRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MilestoneRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MilestoneRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycommonGoodRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycommonGoodRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommonGoodRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CommonGoodRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypledgeEventRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypledgeEventRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeEventRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeEventRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypledgeRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypledgeRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeoaEventRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeoaEventRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EoaEventRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EoaEventRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeoaRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeoaRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EoaRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EoaRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscription = {
  uniswapFactory?: Maybe<UniswapFactory>;
  uniswapFactories: Array<UniswapFactory>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  uniswapDayData?: Maybe<UniswapDayData>;
  uniswapDayDatas: Array<UniswapDayData>;
  pairHourData?: Maybe<PairHourData>;
  pairHourDatas: Array<PairHourData>;
  pairDayData?: Maybe<PairDayData>;
  pairDayDatas: Array<PairDayData>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  factoryRecord?: Maybe<FactoryRecord>;
  factoryRecords: Array<FactoryRecord>;
  commonGoodCreatedEvent?: Maybe<CommonGoodCreatedEvent>;
  commonGoodCreatedEvents: Array<CommonGoodCreatedEvent>;
  pledgeEvent?: Maybe<PledgeEvent>;
  pledgeEvents: Array<PledgeEvent>;
  pledgeWithdrawnEvent?: Maybe<PledgeWithdrawnEvent>;
  pledgeWithdrawnEvents: Array<PledgeWithdrawnEvent>;
  metadataUpdatedEvent?: Maybe<MetadataUpdatedEvent>;
  metadataUpdatedEvents: Array<MetadataUpdatedEvent>;
  announcementEvent?: Maybe<AnnouncementEvent>;
  announcementEvents: Array<AnnouncementEvent>;
  nextMilestoneStartedEvent?: Maybe<NextMilestoneStartedEvent>;
  nextMilestoneStartedEvents: Array<NextMilestoneStartedEvent>;
  projectSucceededFundraisingEvent?: Maybe<ProjectSucceededFundraisingEvent>;
  projectSucceededFundraisingEvents: Array<ProjectSucceededFundraisingEvent>;
  projectFailedFundraisingEvent?: Maybe<ProjectFailedFundraisingEvent>;
  projectFailedFundraisingEvents: Array<ProjectFailedFundraisingEvent>;
  fundsClaimedEvent?: Maybe<FundsClaimedEvent>;
  fundsClaimedEvents: Array<FundsClaimedEvent>;
  commonGoodEventRecord?: Maybe<CommonGoodEventRecord>;
  commonGoodEventRecords: Array<CommonGoodEventRecord>;
  milestoneRecord?: Maybe<MilestoneRecord>;
  milestoneRecords: Array<MilestoneRecord>;
  commonGoodRecord?: Maybe<CommonGoodRecord>;
  commonGoodRecords: Array<CommonGoodRecord>;
  pledgeEventRecord?: Maybe<PledgeEventRecord>;
  pledgeEventRecords: Array<PledgeEventRecord>;
  pledgeRecord?: Maybe<PledgeRecord>;
  pledgeRecords: Array<PledgeRecord>;
  eoaEventRecord?: Maybe<EoaEventRecord>;
  eoaEventRecords: Array<EoaEventRecord>;
  eoaRecord?: Maybe<EoaRecord>;
  eoaRecords: Array<EoaRecord>;
};


export type SubscriptionuniswapFactoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniswapFactory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapFactory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type SubscriptionfactoryRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfactoryRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FactoryRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FactoryRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncommonGoodCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncommonGoodCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommonGoodCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CommonGoodCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpledgeEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpledgeEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpledgeWithdrawnEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpledgeWithdrawnEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeWithdrawnEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeWithdrawnEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmetadataUpdatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmetadataUpdatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetadataUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetadataUpdatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionannouncementEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionannouncementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnouncementEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AnnouncementEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnextMilestoneStartedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnextMilestoneStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NextMilestoneStartedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NextMilestoneStartedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectSucceededFundraisingEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectSucceededFundraisingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectSucceededFundraisingEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectSucceededFundraisingEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectFailedFundraisingEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectFailedFundraisingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectFailedFundraisingEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectFailedFundraisingEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfundsClaimedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfundsClaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundsClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FundsClaimedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncommonGoodEventRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncommonGoodEventRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommonGoodEventRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CommonGoodEventRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmilestoneRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmilestoneRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MilestoneRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MilestoneRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncommonGoodRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncommonGoodRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommonGoodRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CommonGoodRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpledgeEventRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpledgeEventRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeEventRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeEventRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpledgeRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpledgeRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneoaEventRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneoaEventRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EoaEventRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EoaEventRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneoaRecordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneoaRecordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EoaRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EoaRecord_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Bundle = {
  id: Scalars['ID'];
  ethPrice: Scalars['BigDecimal'];
};

export type Bundle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ethPrice?: InputMaybe<Scalars['BigDecimal']>;
  ethPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  ethPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  ethPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  ethPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  ethPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  ethPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  ethPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Bundle_orderBy =
  | 'id'
  | 'ethPrice';

export type Burn = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  liquidity: Scalars['BigDecimal'];
  sender?: Maybe<Scalars['Bytes']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  to?: Maybe<Scalars['Bytes']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  needsComplete: Scalars['Boolean'];
  feeTo?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
};

export type Burn_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  needsComplete?: InputMaybe<Scalars['Boolean']>;
  needsComplete_not?: InputMaybe<Scalars['Boolean']>;
  needsComplete_in?: InputMaybe<Array<Scalars['Boolean']>>;
  needsComplete_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  feeTo?: InputMaybe<Scalars['Bytes']>;
  feeTo_not?: InputMaybe<Scalars['Bytes']>;
  feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeTo_contains?: InputMaybe<Scalars['Bytes']>;
  feeTo_not_contains?: InputMaybe<Scalars['Bytes']>;
  feeLiquidity?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Burn_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pair'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'to'
  | 'logIndex'
  | 'amountUSD'
  | 'needsComplete'
  | 'feeTo'
  | 'feeLiquidity';

export type LiquidityPosition = {
  id: Scalars['ID'];
  user: User;
  pair: Pair;
  liquidityTokenBalance: Scalars['BigDecimal'];
};

export type LiquidityPositionSnapshot = {
  id: Scalars['ID'];
  liquidityPosition: LiquidityPosition;
  timestamp: Scalars['Int'];
  block: Scalars['Int'];
  user: User;
  pair: Pair;
  token0PriceUSD: Scalars['BigDecimal'];
  token1PriceUSD: Scalars['BigDecimal'];
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  liquidityTokenTotalSupply: Scalars['BigDecimal'];
  liquidityTokenBalance: Scalars['BigDecimal'];
};

export type LiquidityPositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityPosition?: InputMaybe<Scalars['String']>;
  liquidityPosition_not?: InputMaybe<Scalars['String']>;
  liquidityPosition_gt?: InputMaybe<Scalars['String']>;
  liquidityPosition_lt?: InputMaybe<Scalars['String']>;
  liquidityPosition_gte?: InputMaybe<Scalars['String']>;
  liquidityPosition_lte?: InputMaybe<Scalars['String']>;
  liquidityPosition_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_?: InputMaybe<LiquidityPosition_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  block?: InputMaybe<Scalars['Int']>;
  block_not?: InputMaybe<Scalars['Int']>;
  block_gt?: InputMaybe<Scalars['Int']>;
  block_lt?: InputMaybe<Scalars['Int']>;
  block_gte?: InputMaybe<Scalars['Int']>;
  block_lte?: InputMaybe<Scalars['Int']>;
  block_in?: InputMaybe<Array<Scalars['Int']>>;
  block_not_in?: InputMaybe<Array<Scalars['Int']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  token0PriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1PriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve0?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenTotalSupply?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type LiquidityPositionSnapshot_orderBy =
  | 'id'
  | 'liquidityPosition'
  | 'timestamp'
  | 'block'
  | 'user'
  | 'pair'
  | 'token0PriceUSD'
  | 'token1PriceUSD'
  | 'reserve0'
  | 'reserve1'
  | 'reserveUSD'
  | 'liquidityTokenTotalSupply'
  | 'liquidityTokenBalance';

export type LiquidityPosition_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type LiquidityPosition_orderBy =
  | 'id'
  | 'user'
  | 'pair'
  | 'liquidityTokenBalance';

export type Mint = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  to: Scalars['Bytes'];
  liquidity: Scalars['BigDecimal'];
  sender?: Maybe<Scalars['Bytes']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  feeTo?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
};

export type Mint_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeTo?: InputMaybe<Scalars['Bytes']>;
  feeTo_not?: InputMaybe<Scalars['Bytes']>;
  feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeTo_contains?: InputMaybe<Scalars['Bytes']>;
  feeTo_not_contains?: InputMaybe<Scalars['Bytes']>;
  feeLiquidity?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Mint_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pair'
  | 'to'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'logIndex'
  | 'amountUSD'
  | 'feeTo'
  | 'feeLiquidity';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Pair = {
  id: Scalars['ID'];
  token0: Token;
  token1: Token;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  totalSupply: Scalars['BigDecimal'];
  reserveETH: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  trackedReserveETH: Scalars['BigDecimal'];
  token0Price: Scalars['BigDecimal'];
  token1Price: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  liquidityProviderCount: Scalars['BigInt'];
};

export type PairDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pairAddress: Scalars['Bytes'];
  token0: Token;
  token1: Token;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  totalSupply: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  dailyVolumeToken0: Scalars['BigDecimal'];
  dailyVolumeToken1: Scalars['BigDecimal'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  dailyTxns: Scalars['BigInt'];
};

export type PairDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pairAddress?: InputMaybe<Scalars['Bytes']>;
  pairAddress_not?: InputMaybe<Scalars['Bytes']>;
  pairAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pairAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pairAddress_contains?: InputMaybe<Scalars['Bytes']>;
  pairAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  reserve0?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSupply?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTxns?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_not?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PairDayData_orderBy =
  | 'id'
  | 'date'
  | 'pairAddress'
  | 'token0'
  | 'token1'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveUSD'
  | 'dailyVolumeToken0'
  | 'dailyVolumeToken1'
  | 'dailyVolumeUSD'
  | 'dailyTxns';

export type PairHourData = {
  id: Scalars['ID'];
  hourStartUnix: Scalars['Int'];
  pair: Pair;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  hourlyVolumeToken0: Scalars['BigDecimal'];
  hourlyVolumeToken1: Scalars['BigDecimal'];
  hourlyVolumeUSD: Scalars['BigDecimal'];
  hourlyTxns: Scalars['BigInt'];
};

export type PairHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hourStartUnix?: InputMaybe<Scalars['Int']>;
  hourStartUnix_not?: InputMaybe<Scalars['Int']>;
  hourStartUnix_gt?: InputMaybe<Scalars['Int']>;
  hourStartUnix_lt?: InputMaybe<Scalars['Int']>;
  hourStartUnix_gte?: InputMaybe<Scalars['Int']>;
  hourStartUnix_lte?: InputMaybe<Scalars['Int']>;
  hourStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  hourStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  reserve0?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyTxns?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_not?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PairHourData_orderBy =
  | 'id'
  | 'hourStartUnix'
  | 'pair'
  | 'reserve0'
  | 'reserve1'
  | 'reserveUSD'
  | 'hourlyVolumeToken0'
  | 'hourlyVolumeToken1'
  | 'hourlyVolumeUSD'
  | 'hourlyTxns';

export type Pair_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  reserve0?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSupply?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveETH?: InputMaybe<Scalars['BigDecimal']>;
  reserveETH_not?: InputMaybe<Scalars['BigDecimal']>;
  reserveETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserveETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserveETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserveETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  trackedReserveETH?: InputMaybe<Scalars['BigDecimal']>;
  trackedReserveETH_not?: InputMaybe<Scalars['BigDecimal']>;
  trackedReserveETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  trackedReserveETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  trackedReserveETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  trackedReserveETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  trackedReserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  trackedReserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Pair_orderBy =
  | 'id'
  | 'token0'
  | 'token1'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveETH'
  | 'reserveUSD'
  | 'trackedReserveETH'
  | 'token0Price'
  | 'token1Price'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'txCount'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'liquidityProviderCount';

export type Swap = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  sender: Scalars['Bytes'];
  amount0In: Scalars['BigDecimal'];
  amount1In: Scalars['BigDecimal'];
  amount0Out: Scalars['BigDecimal'];
  amount1Out: Scalars['BigDecimal'];
  to: Scalars['Bytes'];
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD: Scalars['BigDecimal'];
};

export type Swap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0In?: InputMaybe<Scalars['BigDecimal']>;
  amount0In_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0In_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0In_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0In_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0In_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0In_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0In_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1In?: InputMaybe<Scalars['BigDecimal']>;
  amount1In_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1In_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1In_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1In_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1In_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1In_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1In_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0Out?: InputMaybe<Scalars['BigDecimal']>;
  amount0Out_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0Out_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0Out_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0Out_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0Out_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0Out_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1Out?: InputMaybe<Scalars['BigDecimal']>;
  amount1Out_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1Out_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1Out_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1Out_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1Out_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1Out_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Swap_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pair'
  | 'sender'
  | 'amount0In'
  | 'amount1In'
  | 'amount0Out'
  | 'amount1Out'
  | 'to'
  | 'logIndex'
  | 'amountUSD';

export type Token = {
  id: Scalars['ID'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['BigInt'];
  totalSupply: Scalars['BigInt'];
  tradeVolume: Scalars['BigDecimal'];
  tradeVolumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  totalLiquidity: Scalars['BigDecimal'];
  derivedETH?: Maybe<Scalars['BigDecimal']>;
  mostLiquidPairs: Array<Maybe<PairDayData>>;
};


export type TokenmostLiquidPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDayData_filter>;
};

export type TokenDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: Token;
  dailyVolumeToken: Scalars['BigDecimal'];
  dailyVolumeETH: Scalars['BigDecimal'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  dailyTxns: Scalars['BigInt'];
  totalLiquidityToken: Scalars['BigDecimal'];
  totalLiquidityETH: Scalars['BigDecimal'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  priceUSD: Scalars['BigDecimal'];
  maxStored: Scalars['Int'];
  mostLiquidPairs: Array<PairDayData>;
};


export type TokenDayDatamostLiquidPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDayData_filter>;
};

export type TokenDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  dailyVolumeToken?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTxns?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_not?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidityToken?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityToken_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  maxStored?: InputMaybe<Scalars['Int']>;
  maxStored_not?: InputMaybe<Scalars['Int']>;
  maxStored_gt?: InputMaybe<Scalars['Int']>;
  maxStored_lt?: InputMaybe<Scalars['Int']>;
  maxStored_gte?: InputMaybe<Scalars['Int']>;
  maxStored_lte?: InputMaybe<Scalars['Int']>;
  maxStored_in?: InputMaybe<Array<Scalars['Int']>>;
  maxStored_not_in?: InputMaybe<Array<Scalars['Int']>>;
  mostLiquidPairs?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_not?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_?: InputMaybe<PairDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TokenDayData_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'dailyVolumeToken'
  | 'dailyVolumeETH'
  | 'dailyVolumeUSD'
  | 'dailyTxns'
  | 'totalLiquidityToken'
  | 'totalLiquidityETH'
  | 'totalLiquidityUSD'
  | 'priceUSD'
  | 'maxStored'
  | 'mostLiquidPairs';

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tradeVolume?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradeVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidity?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedETH?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_not?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  mostLiquidPairs?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_not?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_?: InputMaybe<PairDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Token_orderBy =
  | 'id'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'totalSupply'
  | 'tradeVolume'
  | 'tradeVolumeUSD'
  | 'untrackedVolumeUSD'
  | 'txCount'
  | 'totalLiquidity'
  | 'derivedETH'
  | 'mostLiquidPairs';

export type Transaction = {
  id: Scalars['ID'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  mints: Array<Maybe<Mint>>;
  burns: Array<Maybe<Burn>>;
  swaps: Array<Maybe<Swap>>;
};


export type TransactionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
};


export type TransactionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
};


export type TransactionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mints?: InputMaybe<Array<Scalars['String']>>;
  mints_not?: InputMaybe<Array<Scalars['String']>>;
  mints_contains?: InputMaybe<Array<Scalars['String']>>;
  mints_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mints_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mints_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mints_?: InputMaybe<Mint_filter>;
  burns?: InputMaybe<Array<Scalars['String']>>;
  burns_not?: InputMaybe<Array<Scalars['String']>>;
  burns_contains?: InputMaybe<Array<Scalars['String']>>;
  burns_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  burns_not_contains?: InputMaybe<Array<Scalars['String']>>;
  burns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  burns_?: InputMaybe<Burn_filter>;
  swaps?: InputMaybe<Array<Scalars['String']>>;
  swaps_not?: InputMaybe<Array<Scalars['String']>>;
  swaps_contains?: InputMaybe<Array<Scalars['String']>>;
  swaps_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  swaps_not_contains?: InputMaybe<Array<Scalars['String']>>;
  swaps_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  swaps_?: InputMaybe<Swap_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'mints'
  | 'burns'
  | 'swaps';

export type UniswapDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  dailyVolumeETH: Scalars['BigDecimal'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  dailyVolumeUntracked: Scalars['BigDecimal'];
  totalVolumeETH: Scalars['BigDecimal'];
  totalLiquidityETH: Scalars['BigDecimal'];
  totalVolumeUSD: Scalars['BigDecimal'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  maxStored?: Maybe<Scalars['Int']>;
  mostLiquidTokens: Array<TokenDayData>;
  txCount: Scalars['BigInt'];
};


export type UniswapDayDatamostLiquidTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
};

export type UniswapDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUntracked?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  maxStored?: InputMaybe<Scalars['Int']>;
  maxStored_not?: InputMaybe<Scalars['Int']>;
  maxStored_gt?: InputMaybe<Scalars['Int']>;
  maxStored_lt?: InputMaybe<Scalars['Int']>;
  maxStored_gte?: InputMaybe<Scalars['Int']>;
  maxStored_lte?: InputMaybe<Scalars['Int']>;
  maxStored_in?: InputMaybe<Array<Scalars['Int']>>;
  maxStored_not_in?: InputMaybe<Array<Scalars['Int']>>;
  mostLiquidTokens?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_not?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_?: InputMaybe<TokenDayData_filter>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UniswapDayData_orderBy =
  | 'id'
  | 'date'
  | 'dailyVolumeETH'
  | 'dailyVolumeUSD'
  | 'dailyVolumeUntracked'
  | 'totalVolumeETH'
  | 'totalLiquidityETH'
  | 'totalVolumeUSD'
  | 'totalLiquidityUSD'
  | 'maxStored'
  | 'mostLiquidTokens'
  | 'txCount';

export type UniswapFactory = {
  id: Scalars['ID'];
  pairCount: Scalars['Int'];
  totalVolumeUSD: Scalars['BigDecimal'];
  totalVolumeETH: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  totalLiquidityETH: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  mostLiquidTokens: Array<TokenDayData>;
};


export type UniswapFactorymostLiquidTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
};

export type UniswapFactory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pairCount?: InputMaybe<Scalars['Int']>;
  pairCount_not?: InputMaybe<Scalars['Int']>;
  pairCount_gt?: InputMaybe<Scalars['Int']>;
  pairCount_lt?: InputMaybe<Scalars['Int']>;
  pairCount_gte?: InputMaybe<Scalars['Int']>;
  pairCount_lte?: InputMaybe<Scalars['Int']>;
  pairCount_in?: InputMaybe<Array<Scalars['Int']>>;
  pairCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mostLiquidTokens?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_not?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_?: InputMaybe<TokenDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UniswapFactory_orderBy =
  | 'id'
  | 'pairCount'
  | 'totalVolumeUSD'
  | 'totalVolumeETH'
  | 'untrackedVolumeUSD'
  | 'totalLiquidityUSD'
  | 'totalLiquidityETH'
  | 'txCount'
  | 'mostLiquidTokens';

export type User = {
  id: Scalars['ID'];
  liquidityPositions?: Maybe<Array<LiquidityPosition>>;
  usdSwapped: Scalars['BigDecimal'];
};


export type UserliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityPositions_?: InputMaybe<LiquidityPosition_filter>;
  usdSwapped?: InputMaybe<Scalars['BigDecimal']>;
  usdSwapped_not?: InputMaybe<Scalars['BigDecimal']>;
  usdSwapped_gt?: InputMaybe<Scalars['BigDecimal']>;
  usdSwapped_lt?: InputMaybe<Scalars['BigDecimal']>;
  usdSwapped_gte?: InputMaybe<Scalars['BigDecimal']>;
  usdSwapped_lte?: InputMaybe<Scalars['BigDecimal']>;
  usdSwapped_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  usdSwapped_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type User_orderBy =
  | 'id'
  | 'liquidityPositions'
  | 'usdSwapped';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars['String']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type AnnouncementEvent = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  commonGood: CommonGoodRecord;
  CID: Scalars['Bytes'];
  message: Scalars['String'];
  by: EoaRecord;
};

export type AnnouncementEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  CID?: InputMaybe<Scalars['Bytes']>;
  CID_not?: InputMaybe<Scalars['Bytes']>;
  CID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  CID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  CID_contains?: InputMaybe<Scalars['Bytes']>;
  CID_not_contains?: InputMaybe<Scalars['Bytes']>;
  message?: InputMaybe<Scalars['String']>;
  message_not?: InputMaybe<Scalars['String']>;
  message_gt?: InputMaybe<Scalars['String']>;
  message_lt?: InputMaybe<Scalars['String']>;
  message_gte?: InputMaybe<Scalars['String']>;
  message_lte?: InputMaybe<Scalars['String']>;
  message_in?: InputMaybe<Array<Scalars['String']>>;
  message_not_in?: InputMaybe<Array<Scalars['String']>>;
  message_contains?: InputMaybe<Scalars['String']>;
  message_contains_nocase?: InputMaybe<Scalars['String']>;
  message_not_contains?: InputMaybe<Scalars['String']>;
  message_not_contains_nocase?: InputMaybe<Scalars['String']>;
  message_starts_with?: InputMaybe<Scalars['String']>;
  message_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_starts_with?: InputMaybe<Scalars['String']>;
  message_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_ends_with?: InputMaybe<Scalars['String']>;
  message_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_ends_with?: InputMaybe<Scalars['String']>;
  message_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by?: InputMaybe<Scalars['String']>;
  by_not?: InputMaybe<Scalars['String']>;
  by_gt?: InputMaybe<Scalars['String']>;
  by_lt?: InputMaybe<Scalars['String']>;
  by_gte?: InputMaybe<Scalars['String']>;
  by_lte?: InputMaybe<Scalars['String']>;
  by_in?: InputMaybe<Array<Scalars['String']>>;
  by_not_in?: InputMaybe<Array<Scalars['String']>>;
  by_contains?: InputMaybe<Scalars['String']>;
  by_contains_nocase?: InputMaybe<Scalars['String']>;
  by_not_contains?: InputMaybe<Scalars['String']>;
  by_not_contains_nocase?: InputMaybe<Scalars['String']>;
  by_starts_with?: InputMaybe<Scalars['String']>;
  by_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_starts_with?: InputMaybe<Scalars['String']>;
  by_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_ends_with?: InputMaybe<Scalars['String']>;
  by_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_ends_with?: InputMaybe<Scalars['String']>;
  by_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_?: InputMaybe<EoaRecord_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type AnnouncementEvent_orderBy =
  | 'id'
  | 'txHash'
  | 'timestamp'
  | 'commonGood'
  | 'CID'
  | 'message'
  | 'by';

export type CommonGoodCreatedEvent = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  factory: FactoryRecord;
  commonGood: CommonGoodRecord;
  CID: Scalars['Bytes'];
  contents: Scalars['String'];
  by: EoaRecord;
};

export type CommonGoodCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<FactoryRecord_filter>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  CID?: InputMaybe<Scalars['Bytes']>;
  CID_not?: InputMaybe<Scalars['Bytes']>;
  CID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  CID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  CID_contains?: InputMaybe<Scalars['Bytes']>;
  CID_not_contains?: InputMaybe<Scalars['Bytes']>;
  contents?: InputMaybe<Scalars['String']>;
  contents_not?: InputMaybe<Scalars['String']>;
  contents_gt?: InputMaybe<Scalars['String']>;
  contents_lt?: InputMaybe<Scalars['String']>;
  contents_gte?: InputMaybe<Scalars['String']>;
  contents_lte?: InputMaybe<Scalars['String']>;
  contents_in?: InputMaybe<Array<Scalars['String']>>;
  contents_not_in?: InputMaybe<Array<Scalars['String']>>;
  contents_contains?: InputMaybe<Scalars['String']>;
  contents_contains_nocase?: InputMaybe<Scalars['String']>;
  contents_not_contains?: InputMaybe<Scalars['String']>;
  contents_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contents_starts_with?: InputMaybe<Scalars['String']>;
  contents_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contents_not_starts_with?: InputMaybe<Scalars['String']>;
  contents_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contents_ends_with?: InputMaybe<Scalars['String']>;
  contents_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contents_not_ends_with?: InputMaybe<Scalars['String']>;
  contents_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by?: InputMaybe<Scalars['String']>;
  by_not?: InputMaybe<Scalars['String']>;
  by_gt?: InputMaybe<Scalars['String']>;
  by_lt?: InputMaybe<Scalars['String']>;
  by_gte?: InputMaybe<Scalars['String']>;
  by_lte?: InputMaybe<Scalars['String']>;
  by_in?: InputMaybe<Array<Scalars['String']>>;
  by_not_in?: InputMaybe<Array<Scalars['String']>>;
  by_contains?: InputMaybe<Scalars['String']>;
  by_contains_nocase?: InputMaybe<Scalars['String']>;
  by_not_contains?: InputMaybe<Scalars['String']>;
  by_not_contains_nocase?: InputMaybe<Scalars['String']>;
  by_starts_with?: InputMaybe<Scalars['String']>;
  by_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_starts_with?: InputMaybe<Scalars['String']>;
  by_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_ends_with?: InputMaybe<Scalars['String']>;
  by_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_ends_with?: InputMaybe<Scalars['String']>;
  by_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_?: InputMaybe<EoaRecord_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type CommonGoodCreatedEvent_orderBy =
  | 'id'
  | 'txHash'
  | 'timestamp'
  | 'factory'
  | 'commonGood'
  | 'CID'
  | 'contents'
  | 'by';

export type CommonGoodEventRecord = {
  id: Scalars['ID'];
  commonGood: CommonGoodRecord;
  txHash: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  created?: Maybe<CommonGoodCreatedEvent>;
  pledged?: Maybe<PledgeEvent>;
  withdrew?: Maybe<PledgeWithdrawnEvent>;
  next?: Maybe<NextMilestoneStartedEvent>;
  succeeded?: Maybe<ProjectSucceededFundraisingEvent>;
  failed?: Maybe<ProjectFailedFundraisingEvent>;
  claimed?: Maybe<FundsClaimedEvent>;
  announcement?: Maybe<AnnouncementEvent>;
  metadata?: Maybe<MetadataUpdatedEvent>;
};

export type CommonGoodEventRecord_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  created?: InputMaybe<Scalars['String']>;
  created_not?: InputMaybe<Scalars['String']>;
  created_gt?: InputMaybe<Scalars['String']>;
  created_lt?: InputMaybe<Scalars['String']>;
  created_gte?: InputMaybe<Scalars['String']>;
  created_lte?: InputMaybe<Scalars['String']>;
  created_in?: InputMaybe<Array<Scalars['String']>>;
  created_not_in?: InputMaybe<Array<Scalars['String']>>;
  created_contains?: InputMaybe<Scalars['String']>;
  created_contains_nocase?: InputMaybe<Scalars['String']>;
  created_not_contains?: InputMaybe<Scalars['String']>;
  created_not_contains_nocase?: InputMaybe<Scalars['String']>;
  created_starts_with?: InputMaybe<Scalars['String']>;
  created_starts_with_nocase?: InputMaybe<Scalars['String']>;
  created_not_starts_with?: InputMaybe<Scalars['String']>;
  created_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  created_ends_with?: InputMaybe<Scalars['String']>;
  created_ends_with_nocase?: InputMaybe<Scalars['String']>;
  created_not_ends_with?: InputMaybe<Scalars['String']>;
  created_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  created_?: InputMaybe<CommonGoodCreatedEvent_filter>;
  pledged?: InputMaybe<Scalars['String']>;
  pledged_not?: InputMaybe<Scalars['String']>;
  pledged_gt?: InputMaybe<Scalars['String']>;
  pledged_lt?: InputMaybe<Scalars['String']>;
  pledged_gte?: InputMaybe<Scalars['String']>;
  pledged_lte?: InputMaybe<Scalars['String']>;
  pledged_in?: InputMaybe<Array<Scalars['String']>>;
  pledged_not_in?: InputMaybe<Array<Scalars['String']>>;
  pledged_contains?: InputMaybe<Scalars['String']>;
  pledged_contains_nocase?: InputMaybe<Scalars['String']>;
  pledged_not_contains?: InputMaybe<Scalars['String']>;
  pledged_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pledged_starts_with?: InputMaybe<Scalars['String']>;
  pledged_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pledged_not_starts_with?: InputMaybe<Scalars['String']>;
  pledged_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pledged_ends_with?: InputMaybe<Scalars['String']>;
  pledged_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pledged_not_ends_with?: InputMaybe<Scalars['String']>;
  pledged_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pledged_?: InputMaybe<PledgeEvent_filter>;
  withdrew?: InputMaybe<Scalars['String']>;
  withdrew_not?: InputMaybe<Scalars['String']>;
  withdrew_gt?: InputMaybe<Scalars['String']>;
  withdrew_lt?: InputMaybe<Scalars['String']>;
  withdrew_gte?: InputMaybe<Scalars['String']>;
  withdrew_lte?: InputMaybe<Scalars['String']>;
  withdrew_in?: InputMaybe<Array<Scalars['String']>>;
  withdrew_not_in?: InputMaybe<Array<Scalars['String']>>;
  withdrew_contains?: InputMaybe<Scalars['String']>;
  withdrew_contains_nocase?: InputMaybe<Scalars['String']>;
  withdrew_not_contains?: InputMaybe<Scalars['String']>;
  withdrew_not_contains_nocase?: InputMaybe<Scalars['String']>;
  withdrew_starts_with?: InputMaybe<Scalars['String']>;
  withdrew_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrew_not_starts_with?: InputMaybe<Scalars['String']>;
  withdrew_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrew_ends_with?: InputMaybe<Scalars['String']>;
  withdrew_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrew_not_ends_with?: InputMaybe<Scalars['String']>;
  withdrew_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrew_?: InputMaybe<PledgeWithdrawnEvent_filter>;
  next?: InputMaybe<Scalars['String']>;
  next_not?: InputMaybe<Scalars['String']>;
  next_gt?: InputMaybe<Scalars['String']>;
  next_lt?: InputMaybe<Scalars['String']>;
  next_gte?: InputMaybe<Scalars['String']>;
  next_lte?: InputMaybe<Scalars['String']>;
  next_in?: InputMaybe<Array<Scalars['String']>>;
  next_not_in?: InputMaybe<Array<Scalars['String']>>;
  next_contains?: InputMaybe<Scalars['String']>;
  next_contains_nocase?: InputMaybe<Scalars['String']>;
  next_not_contains?: InputMaybe<Scalars['String']>;
  next_not_contains_nocase?: InputMaybe<Scalars['String']>;
  next_starts_with?: InputMaybe<Scalars['String']>;
  next_starts_with_nocase?: InputMaybe<Scalars['String']>;
  next_not_starts_with?: InputMaybe<Scalars['String']>;
  next_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  next_ends_with?: InputMaybe<Scalars['String']>;
  next_ends_with_nocase?: InputMaybe<Scalars['String']>;
  next_not_ends_with?: InputMaybe<Scalars['String']>;
  next_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  next_?: InputMaybe<NextMilestoneStartedEvent_filter>;
  succeeded?: InputMaybe<Scalars['String']>;
  succeeded_not?: InputMaybe<Scalars['String']>;
  succeeded_gt?: InputMaybe<Scalars['String']>;
  succeeded_lt?: InputMaybe<Scalars['String']>;
  succeeded_gte?: InputMaybe<Scalars['String']>;
  succeeded_lte?: InputMaybe<Scalars['String']>;
  succeeded_in?: InputMaybe<Array<Scalars['String']>>;
  succeeded_not_in?: InputMaybe<Array<Scalars['String']>>;
  succeeded_contains?: InputMaybe<Scalars['String']>;
  succeeded_contains_nocase?: InputMaybe<Scalars['String']>;
  succeeded_not_contains?: InputMaybe<Scalars['String']>;
  succeeded_not_contains_nocase?: InputMaybe<Scalars['String']>;
  succeeded_starts_with?: InputMaybe<Scalars['String']>;
  succeeded_starts_with_nocase?: InputMaybe<Scalars['String']>;
  succeeded_not_starts_with?: InputMaybe<Scalars['String']>;
  succeeded_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  succeeded_ends_with?: InputMaybe<Scalars['String']>;
  succeeded_ends_with_nocase?: InputMaybe<Scalars['String']>;
  succeeded_not_ends_with?: InputMaybe<Scalars['String']>;
  succeeded_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  succeeded_?: InputMaybe<ProjectSucceededFundraisingEvent_filter>;
  failed?: InputMaybe<Scalars['String']>;
  failed_not?: InputMaybe<Scalars['String']>;
  failed_gt?: InputMaybe<Scalars['String']>;
  failed_lt?: InputMaybe<Scalars['String']>;
  failed_gte?: InputMaybe<Scalars['String']>;
  failed_lte?: InputMaybe<Scalars['String']>;
  failed_in?: InputMaybe<Array<Scalars['String']>>;
  failed_not_in?: InputMaybe<Array<Scalars['String']>>;
  failed_contains?: InputMaybe<Scalars['String']>;
  failed_contains_nocase?: InputMaybe<Scalars['String']>;
  failed_not_contains?: InputMaybe<Scalars['String']>;
  failed_not_contains_nocase?: InputMaybe<Scalars['String']>;
  failed_starts_with?: InputMaybe<Scalars['String']>;
  failed_starts_with_nocase?: InputMaybe<Scalars['String']>;
  failed_not_starts_with?: InputMaybe<Scalars['String']>;
  failed_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  failed_ends_with?: InputMaybe<Scalars['String']>;
  failed_ends_with_nocase?: InputMaybe<Scalars['String']>;
  failed_not_ends_with?: InputMaybe<Scalars['String']>;
  failed_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  failed_?: InputMaybe<ProjectFailedFundraisingEvent_filter>;
  claimed?: InputMaybe<Scalars['String']>;
  claimed_not?: InputMaybe<Scalars['String']>;
  claimed_gt?: InputMaybe<Scalars['String']>;
  claimed_lt?: InputMaybe<Scalars['String']>;
  claimed_gte?: InputMaybe<Scalars['String']>;
  claimed_lte?: InputMaybe<Scalars['String']>;
  claimed_in?: InputMaybe<Array<Scalars['String']>>;
  claimed_not_in?: InputMaybe<Array<Scalars['String']>>;
  claimed_contains?: InputMaybe<Scalars['String']>;
  claimed_contains_nocase?: InputMaybe<Scalars['String']>;
  claimed_not_contains?: InputMaybe<Scalars['String']>;
  claimed_not_contains_nocase?: InputMaybe<Scalars['String']>;
  claimed_starts_with?: InputMaybe<Scalars['String']>;
  claimed_starts_with_nocase?: InputMaybe<Scalars['String']>;
  claimed_not_starts_with?: InputMaybe<Scalars['String']>;
  claimed_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  claimed_ends_with?: InputMaybe<Scalars['String']>;
  claimed_ends_with_nocase?: InputMaybe<Scalars['String']>;
  claimed_not_ends_with?: InputMaybe<Scalars['String']>;
  claimed_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  claimed_?: InputMaybe<FundsClaimedEvent_filter>;
  announcement?: InputMaybe<Scalars['String']>;
  announcement_not?: InputMaybe<Scalars['String']>;
  announcement_gt?: InputMaybe<Scalars['String']>;
  announcement_lt?: InputMaybe<Scalars['String']>;
  announcement_gte?: InputMaybe<Scalars['String']>;
  announcement_lte?: InputMaybe<Scalars['String']>;
  announcement_in?: InputMaybe<Array<Scalars['String']>>;
  announcement_not_in?: InputMaybe<Array<Scalars['String']>>;
  announcement_contains?: InputMaybe<Scalars['String']>;
  announcement_contains_nocase?: InputMaybe<Scalars['String']>;
  announcement_not_contains?: InputMaybe<Scalars['String']>;
  announcement_not_contains_nocase?: InputMaybe<Scalars['String']>;
  announcement_starts_with?: InputMaybe<Scalars['String']>;
  announcement_starts_with_nocase?: InputMaybe<Scalars['String']>;
  announcement_not_starts_with?: InputMaybe<Scalars['String']>;
  announcement_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  announcement_ends_with?: InputMaybe<Scalars['String']>;
  announcement_ends_with_nocase?: InputMaybe<Scalars['String']>;
  announcement_not_ends_with?: InputMaybe<Scalars['String']>;
  announcement_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  announcement_?: InputMaybe<AnnouncementEvent_filter>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_?: InputMaybe<MetadataUpdatedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type CommonGoodEventRecord_orderBy =
  | 'id'
  | 'commonGood'
  | 'txHash'
  | 'timestamp'
  | 'created'
  | 'pledged'
  | 'withdrew'
  | 'next'
  | 'succeeded'
  | 'failed'
  | 'claimed'
  | 'announcement'
  | 'metadata';

export type CommonGoodRecord = {
  id: Scalars['ID'];
  contractAddress: Scalars['Bytes'];
  initializerAddress: Scalars['Bytes'];
  adminAddresses: Array<Scalars['Bytes']>;
  teamAddress: Scalars['Bytes'];
  metadataCID: Scalars['Bytes'];
  metadataContents: Scalars['String'];
  factory: FactoryRecord;
  createdAt: Scalars['BigInt'];
  lastUpdateTime: Scalars['BigInt'];
  state: CommonGoodRecordState;
  currentMilestoneStartDate: Scalars['BigInt'];
  lastMilestoneEndDate: Scalars['BigInt'];
  balance: Scalars['BigInt'];
  raisedAmount: Scalars['BigInt'];
  withdrawnAmount: Scalars['BigInt'];
  claimedAmount: Scalars['BigInt'];
  milestones: Array<MilestoneRecord>;
  pledges: Array<PledgeRecord>;
  pledgerCount: Scalars['Int'];
  withdrawnPledgerCount: Scalars['Int'];
  createdEvent: CommonGoodCreatedEvent;
  pledgeWithdrawEvents: Array<PledgeWithdrawnEvent>;
  pledgeEvents: Array<PledgeEvent>;
  nextEvents: Array<NextMilestoneStartedEvent>;
  succeeded?: Maybe<ProjectSucceededFundraisingEvent>;
  failed?: Maybe<ProjectFailedFundraisingEvent>;
  claimedEvents: Array<FundsClaimedEvent>;
  events: Array<CommonGoodEventRecord>;
};


export type CommonGoodRecordmilestonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MilestoneRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MilestoneRecord_filter>;
};


export type CommonGoodRecordpledgesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeRecord_filter>;
};


export type CommonGoodRecordpledgeWithdrawEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeWithdrawnEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeWithdrawnEvent_filter>;
};


export type CommonGoodRecordpledgeEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeEvent_filter>;
};


export type CommonGoodRecordnextEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NextMilestoneStartedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NextMilestoneStartedEvent_filter>;
};


export type CommonGoodRecordclaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundsClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FundsClaimedEvent_filter>;
};


export type CommonGoodRecordeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommonGoodEventRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CommonGoodEventRecord_filter>;
};

export type CommonGoodRecordState =
  | 'ACTIVE'
  | 'FAILED'
  | 'SUCCEEDED';

export type CommonGoodRecord_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  contractAddress?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not?: InputMaybe<Scalars['Bytes']>;
  contractAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_contains?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  initializerAddress?: InputMaybe<Scalars['Bytes']>;
  initializerAddress_not?: InputMaybe<Scalars['Bytes']>;
  initializerAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  initializerAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  initializerAddress_contains?: InputMaybe<Scalars['Bytes']>;
  initializerAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  adminAddresses?: InputMaybe<Array<Scalars['Bytes']>>;
  adminAddresses_not?: InputMaybe<Array<Scalars['Bytes']>>;
  adminAddresses_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  adminAddresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  adminAddresses_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  adminAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  teamAddress?: InputMaybe<Scalars['Bytes']>;
  teamAddress_not?: InputMaybe<Scalars['Bytes']>;
  teamAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  teamAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  teamAddress_contains?: InputMaybe<Scalars['Bytes']>;
  teamAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  metadataCID?: InputMaybe<Scalars['Bytes']>;
  metadataCID_not?: InputMaybe<Scalars['Bytes']>;
  metadataCID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadataCID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadataCID_contains?: InputMaybe<Scalars['Bytes']>;
  metadataCID_not_contains?: InputMaybe<Scalars['Bytes']>;
  metadataContents?: InputMaybe<Scalars['String']>;
  metadataContents_not?: InputMaybe<Scalars['String']>;
  metadataContents_gt?: InputMaybe<Scalars['String']>;
  metadataContents_lt?: InputMaybe<Scalars['String']>;
  metadataContents_gte?: InputMaybe<Scalars['String']>;
  metadataContents_lte?: InputMaybe<Scalars['String']>;
  metadataContents_in?: InputMaybe<Array<Scalars['String']>>;
  metadataContents_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadataContents_contains?: InputMaybe<Scalars['String']>;
  metadataContents_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataContents_not_contains?: InputMaybe<Scalars['String']>;
  metadataContents_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataContents_starts_with?: InputMaybe<Scalars['String']>;
  metadataContents_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataContents_not_starts_with?: InputMaybe<Scalars['String']>;
  metadataContents_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataContents_ends_with?: InputMaybe<Scalars['String']>;
  metadataContents_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataContents_not_ends_with?: InputMaybe<Scalars['String']>;
  metadataContents_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<FactoryRecord_filter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdateTime?: InputMaybe<Scalars['BigInt']>;
  lastUpdateTime_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdateTime_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdateTime_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdateTime_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdateTime_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  state?: InputMaybe<CommonGoodRecordState>;
  state_not?: InputMaybe<CommonGoodRecordState>;
  state_in?: InputMaybe<Array<CommonGoodRecordState>>;
  state_not_in?: InputMaybe<Array<CommonGoodRecordState>>;
  currentMilestoneStartDate?: InputMaybe<Scalars['BigInt']>;
  currentMilestoneStartDate_not?: InputMaybe<Scalars['BigInt']>;
  currentMilestoneStartDate_gt?: InputMaybe<Scalars['BigInt']>;
  currentMilestoneStartDate_lt?: InputMaybe<Scalars['BigInt']>;
  currentMilestoneStartDate_gte?: InputMaybe<Scalars['BigInt']>;
  currentMilestoneStartDate_lte?: InputMaybe<Scalars['BigInt']>;
  currentMilestoneStartDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentMilestoneStartDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastMilestoneEndDate?: InputMaybe<Scalars['BigInt']>;
  lastMilestoneEndDate_not?: InputMaybe<Scalars['BigInt']>;
  lastMilestoneEndDate_gt?: InputMaybe<Scalars['BigInt']>;
  lastMilestoneEndDate_lt?: InputMaybe<Scalars['BigInt']>;
  lastMilestoneEndDate_gte?: InputMaybe<Scalars['BigInt']>;
  lastMilestoneEndDate_lte?: InputMaybe<Scalars['BigInt']>;
  lastMilestoneEndDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastMilestoneEndDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  raisedAmount?: InputMaybe<Scalars['BigInt']>;
  raisedAmount_not?: InputMaybe<Scalars['BigInt']>;
  raisedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  raisedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  raisedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  raisedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  raisedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  raisedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedAmount?: InputMaybe<Scalars['BigInt']>;
  claimedAmount_not?: InputMaybe<Scalars['BigInt']>;
  claimedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  claimedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  claimedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  claimedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  claimedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  milestones_?: InputMaybe<MilestoneRecord_filter>;
  pledges_?: InputMaybe<PledgeRecord_filter>;
  pledgerCount?: InputMaybe<Scalars['Int']>;
  pledgerCount_not?: InputMaybe<Scalars['Int']>;
  pledgerCount_gt?: InputMaybe<Scalars['Int']>;
  pledgerCount_lt?: InputMaybe<Scalars['Int']>;
  pledgerCount_gte?: InputMaybe<Scalars['Int']>;
  pledgerCount_lte?: InputMaybe<Scalars['Int']>;
  pledgerCount_in?: InputMaybe<Array<Scalars['Int']>>;
  pledgerCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawnPledgerCount?: InputMaybe<Scalars['Int']>;
  withdrawnPledgerCount_not?: InputMaybe<Scalars['Int']>;
  withdrawnPledgerCount_gt?: InputMaybe<Scalars['Int']>;
  withdrawnPledgerCount_lt?: InputMaybe<Scalars['Int']>;
  withdrawnPledgerCount_gte?: InputMaybe<Scalars['Int']>;
  withdrawnPledgerCount_lte?: InputMaybe<Scalars['Int']>;
  withdrawnPledgerCount_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawnPledgerCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdEvent_?: InputMaybe<CommonGoodCreatedEvent_filter>;
  pledgeWithdrawEvents_?: InputMaybe<PledgeWithdrawnEvent_filter>;
  pledgeEvents_?: InputMaybe<PledgeEvent_filter>;
  nextEvents_?: InputMaybe<NextMilestoneStartedEvent_filter>;
  succeeded?: InputMaybe<Scalars['String']>;
  succeeded_not?: InputMaybe<Scalars['String']>;
  succeeded_gt?: InputMaybe<Scalars['String']>;
  succeeded_lt?: InputMaybe<Scalars['String']>;
  succeeded_gte?: InputMaybe<Scalars['String']>;
  succeeded_lte?: InputMaybe<Scalars['String']>;
  succeeded_in?: InputMaybe<Array<Scalars['String']>>;
  succeeded_not_in?: InputMaybe<Array<Scalars['String']>>;
  succeeded_contains?: InputMaybe<Scalars['String']>;
  succeeded_contains_nocase?: InputMaybe<Scalars['String']>;
  succeeded_not_contains?: InputMaybe<Scalars['String']>;
  succeeded_not_contains_nocase?: InputMaybe<Scalars['String']>;
  succeeded_starts_with?: InputMaybe<Scalars['String']>;
  succeeded_starts_with_nocase?: InputMaybe<Scalars['String']>;
  succeeded_not_starts_with?: InputMaybe<Scalars['String']>;
  succeeded_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  succeeded_ends_with?: InputMaybe<Scalars['String']>;
  succeeded_ends_with_nocase?: InputMaybe<Scalars['String']>;
  succeeded_not_ends_with?: InputMaybe<Scalars['String']>;
  succeeded_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  succeeded_?: InputMaybe<ProjectSucceededFundraisingEvent_filter>;
  failed?: InputMaybe<Scalars['String']>;
  failed_not?: InputMaybe<Scalars['String']>;
  failed_gt?: InputMaybe<Scalars['String']>;
  failed_lt?: InputMaybe<Scalars['String']>;
  failed_gte?: InputMaybe<Scalars['String']>;
  failed_lte?: InputMaybe<Scalars['String']>;
  failed_in?: InputMaybe<Array<Scalars['String']>>;
  failed_not_in?: InputMaybe<Array<Scalars['String']>>;
  failed_contains?: InputMaybe<Scalars['String']>;
  failed_contains_nocase?: InputMaybe<Scalars['String']>;
  failed_not_contains?: InputMaybe<Scalars['String']>;
  failed_not_contains_nocase?: InputMaybe<Scalars['String']>;
  failed_starts_with?: InputMaybe<Scalars['String']>;
  failed_starts_with_nocase?: InputMaybe<Scalars['String']>;
  failed_not_starts_with?: InputMaybe<Scalars['String']>;
  failed_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  failed_ends_with?: InputMaybe<Scalars['String']>;
  failed_ends_with_nocase?: InputMaybe<Scalars['String']>;
  failed_not_ends_with?: InputMaybe<Scalars['String']>;
  failed_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  failed_?: InputMaybe<ProjectFailedFundraisingEvent_filter>;
  claimedEvents_?: InputMaybe<FundsClaimedEvent_filter>;
  events_?: InputMaybe<CommonGoodEventRecord_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type CommonGoodRecord_orderBy =
  | 'id'
  | 'contractAddress'
  | 'initializerAddress'
  | 'adminAddresses'
  | 'teamAddress'
  | 'metadataCID'
  | 'metadataContents'
  | 'factory'
  | 'createdAt'
  | 'lastUpdateTime'
  | 'state'
  | 'currentMilestoneStartDate'
  | 'lastMilestoneEndDate'
  | 'balance'
  | 'raisedAmount'
  | 'withdrawnAmount'
  | 'claimedAmount'
  | 'milestones'
  | 'pledges'
  | 'pledgerCount'
  | 'withdrawnPledgerCount'
  | 'createdEvent'
  | 'pledgeWithdrawEvents'
  | 'pledgeEvents'
  | 'nextEvents'
  | 'succeeded'
  | 'failed'
  | 'claimedEvents'
  | 'events';

export type EoaEventRecord = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  by: EoaRecord;
  timestamp: Scalars['BigInt'];
  created?: Maybe<CommonGoodCreatedEvent>;
  pledged?: Maybe<PledgeEvent>;
  withdrew?: Maybe<PledgeWithdrawnEvent>;
  claimed?: Maybe<FundsClaimedEvent>;
  teamSucceededFundraising?: Maybe<ProjectSucceededFundraisingEvent>;
  teamMissedFundraising?: Maybe<ProjectFailedFundraisingEvent>;
  updated?: Maybe<MetadataUpdatedEvent>;
  announced?: Maybe<AnnouncementEvent>;
};

export type EoaEventRecord_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  by?: InputMaybe<Scalars['String']>;
  by_not?: InputMaybe<Scalars['String']>;
  by_gt?: InputMaybe<Scalars['String']>;
  by_lt?: InputMaybe<Scalars['String']>;
  by_gte?: InputMaybe<Scalars['String']>;
  by_lte?: InputMaybe<Scalars['String']>;
  by_in?: InputMaybe<Array<Scalars['String']>>;
  by_not_in?: InputMaybe<Array<Scalars['String']>>;
  by_contains?: InputMaybe<Scalars['String']>;
  by_contains_nocase?: InputMaybe<Scalars['String']>;
  by_not_contains?: InputMaybe<Scalars['String']>;
  by_not_contains_nocase?: InputMaybe<Scalars['String']>;
  by_starts_with?: InputMaybe<Scalars['String']>;
  by_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_starts_with?: InputMaybe<Scalars['String']>;
  by_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_ends_with?: InputMaybe<Scalars['String']>;
  by_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_ends_with?: InputMaybe<Scalars['String']>;
  by_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_?: InputMaybe<EoaRecord_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  created?: InputMaybe<Scalars['String']>;
  created_not?: InputMaybe<Scalars['String']>;
  created_gt?: InputMaybe<Scalars['String']>;
  created_lt?: InputMaybe<Scalars['String']>;
  created_gte?: InputMaybe<Scalars['String']>;
  created_lte?: InputMaybe<Scalars['String']>;
  created_in?: InputMaybe<Array<Scalars['String']>>;
  created_not_in?: InputMaybe<Array<Scalars['String']>>;
  created_contains?: InputMaybe<Scalars['String']>;
  created_contains_nocase?: InputMaybe<Scalars['String']>;
  created_not_contains?: InputMaybe<Scalars['String']>;
  created_not_contains_nocase?: InputMaybe<Scalars['String']>;
  created_starts_with?: InputMaybe<Scalars['String']>;
  created_starts_with_nocase?: InputMaybe<Scalars['String']>;
  created_not_starts_with?: InputMaybe<Scalars['String']>;
  created_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  created_ends_with?: InputMaybe<Scalars['String']>;
  created_ends_with_nocase?: InputMaybe<Scalars['String']>;
  created_not_ends_with?: InputMaybe<Scalars['String']>;
  created_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  created_?: InputMaybe<CommonGoodCreatedEvent_filter>;
  pledged?: InputMaybe<Scalars['String']>;
  pledged_not?: InputMaybe<Scalars['String']>;
  pledged_gt?: InputMaybe<Scalars['String']>;
  pledged_lt?: InputMaybe<Scalars['String']>;
  pledged_gte?: InputMaybe<Scalars['String']>;
  pledged_lte?: InputMaybe<Scalars['String']>;
  pledged_in?: InputMaybe<Array<Scalars['String']>>;
  pledged_not_in?: InputMaybe<Array<Scalars['String']>>;
  pledged_contains?: InputMaybe<Scalars['String']>;
  pledged_contains_nocase?: InputMaybe<Scalars['String']>;
  pledged_not_contains?: InputMaybe<Scalars['String']>;
  pledged_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pledged_starts_with?: InputMaybe<Scalars['String']>;
  pledged_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pledged_not_starts_with?: InputMaybe<Scalars['String']>;
  pledged_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pledged_ends_with?: InputMaybe<Scalars['String']>;
  pledged_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pledged_not_ends_with?: InputMaybe<Scalars['String']>;
  pledged_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pledged_?: InputMaybe<PledgeEvent_filter>;
  withdrew?: InputMaybe<Scalars['String']>;
  withdrew_not?: InputMaybe<Scalars['String']>;
  withdrew_gt?: InputMaybe<Scalars['String']>;
  withdrew_lt?: InputMaybe<Scalars['String']>;
  withdrew_gte?: InputMaybe<Scalars['String']>;
  withdrew_lte?: InputMaybe<Scalars['String']>;
  withdrew_in?: InputMaybe<Array<Scalars['String']>>;
  withdrew_not_in?: InputMaybe<Array<Scalars['String']>>;
  withdrew_contains?: InputMaybe<Scalars['String']>;
  withdrew_contains_nocase?: InputMaybe<Scalars['String']>;
  withdrew_not_contains?: InputMaybe<Scalars['String']>;
  withdrew_not_contains_nocase?: InputMaybe<Scalars['String']>;
  withdrew_starts_with?: InputMaybe<Scalars['String']>;
  withdrew_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrew_not_starts_with?: InputMaybe<Scalars['String']>;
  withdrew_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrew_ends_with?: InputMaybe<Scalars['String']>;
  withdrew_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrew_not_ends_with?: InputMaybe<Scalars['String']>;
  withdrew_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrew_?: InputMaybe<PledgeWithdrawnEvent_filter>;
  claimed?: InputMaybe<Scalars['String']>;
  claimed_not?: InputMaybe<Scalars['String']>;
  claimed_gt?: InputMaybe<Scalars['String']>;
  claimed_lt?: InputMaybe<Scalars['String']>;
  claimed_gte?: InputMaybe<Scalars['String']>;
  claimed_lte?: InputMaybe<Scalars['String']>;
  claimed_in?: InputMaybe<Array<Scalars['String']>>;
  claimed_not_in?: InputMaybe<Array<Scalars['String']>>;
  claimed_contains?: InputMaybe<Scalars['String']>;
  claimed_contains_nocase?: InputMaybe<Scalars['String']>;
  claimed_not_contains?: InputMaybe<Scalars['String']>;
  claimed_not_contains_nocase?: InputMaybe<Scalars['String']>;
  claimed_starts_with?: InputMaybe<Scalars['String']>;
  claimed_starts_with_nocase?: InputMaybe<Scalars['String']>;
  claimed_not_starts_with?: InputMaybe<Scalars['String']>;
  claimed_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  claimed_ends_with?: InputMaybe<Scalars['String']>;
  claimed_ends_with_nocase?: InputMaybe<Scalars['String']>;
  claimed_not_ends_with?: InputMaybe<Scalars['String']>;
  claimed_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  claimed_?: InputMaybe<FundsClaimedEvent_filter>;
  teamSucceededFundraising?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_not?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_gt?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_lt?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_gte?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_lte?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_in?: InputMaybe<Array<Scalars['String']>>;
  teamSucceededFundraising_not_in?: InputMaybe<Array<Scalars['String']>>;
  teamSucceededFundraising_contains?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_contains_nocase?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_not_contains?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_not_contains_nocase?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_starts_with?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_not_starts_with?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_ends_with?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_ends_with_nocase?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_not_ends_with?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  teamSucceededFundraising_?: InputMaybe<ProjectSucceededFundraisingEvent_filter>;
  teamMissedFundraising?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_not?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_gt?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_lt?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_gte?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_lte?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_in?: InputMaybe<Array<Scalars['String']>>;
  teamMissedFundraising_not_in?: InputMaybe<Array<Scalars['String']>>;
  teamMissedFundraising_contains?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_contains_nocase?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_not_contains?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_not_contains_nocase?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_starts_with?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_not_starts_with?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_ends_with?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_ends_with_nocase?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_not_ends_with?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  teamMissedFundraising_?: InputMaybe<ProjectFailedFundraisingEvent_filter>;
  updated?: InputMaybe<Scalars['String']>;
  updated_not?: InputMaybe<Scalars['String']>;
  updated_gt?: InputMaybe<Scalars['String']>;
  updated_lt?: InputMaybe<Scalars['String']>;
  updated_gte?: InputMaybe<Scalars['String']>;
  updated_lte?: InputMaybe<Scalars['String']>;
  updated_in?: InputMaybe<Array<Scalars['String']>>;
  updated_not_in?: InputMaybe<Array<Scalars['String']>>;
  updated_contains?: InputMaybe<Scalars['String']>;
  updated_contains_nocase?: InputMaybe<Scalars['String']>;
  updated_not_contains?: InputMaybe<Scalars['String']>;
  updated_not_contains_nocase?: InputMaybe<Scalars['String']>;
  updated_starts_with?: InputMaybe<Scalars['String']>;
  updated_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updated_not_starts_with?: InputMaybe<Scalars['String']>;
  updated_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updated_ends_with?: InputMaybe<Scalars['String']>;
  updated_ends_with_nocase?: InputMaybe<Scalars['String']>;
  updated_not_ends_with?: InputMaybe<Scalars['String']>;
  updated_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  updated_?: InputMaybe<MetadataUpdatedEvent_filter>;
  announced?: InputMaybe<Scalars['String']>;
  announced_not?: InputMaybe<Scalars['String']>;
  announced_gt?: InputMaybe<Scalars['String']>;
  announced_lt?: InputMaybe<Scalars['String']>;
  announced_gte?: InputMaybe<Scalars['String']>;
  announced_lte?: InputMaybe<Scalars['String']>;
  announced_in?: InputMaybe<Array<Scalars['String']>>;
  announced_not_in?: InputMaybe<Array<Scalars['String']>>;
  announced_contains?: InputMaybe<Scalars['String']>;
  announced_contains_nocase?: InputMaybe<Scalars['String']>;
  announced_not_contains?: InputMaybe<Scalars['String']>;
  announced_not_contains_nocase?: InputMaybe<Scalars['String']>;
  announced_starts_with?: InputMaybe<Scalars['String']>;
  announced_starts_with_nocase?: InputMaybe<Scalars['String']>;
  announced_not_starts_with?: InputMaybe<Scalars['String']>;
  announced_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  announced_ends_with?: InputMaybe<Scalars['String']>;
  announced_ends_with_nocase?: InputMaybe<Scalars['String']>;
  announced_not_ends_with?: InputMaybe<Scalars['String']>;
  announced_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  announced_?: InputMaybe<AnnouncementEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type EoaEventRecord_orderBy =
  | 'id'
  | 'txHash'
  | 'by'
  | 'timestamp'
  | 'created'
  | 'pledged'
  | 'withdrew'
  | 'claimed'
  | 'teamSucceededFundraising'
  | 'teamMissedFundraising'
  | 'updated'
  | 'announced';

export type EoaRecord = {
  id: Scalars['ID'];
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
  pledgeCount: Scalars['Int'];
  withdrawCount: Scalars['Int'];
  pledgeBestowed: Scalars['BigInt'];
  pledgeWithdrew: Scalars['BigInt'];
  claimedTotal: Scalars['BigInt'];
  createdCount: Scalars['Int'];
  pledgedCount: Scalars['Int'];
  withdrewCount: Scalars['Int'];
  claimedCount: Scalars['Int'];
  teamFailedCount: Scalars['Int'];
  teamSucceededCount: Scalars['Int'];
  updatesCount: Scalars['Int'];
  announcementCount: Scalars['Int'];
  pledges: Array<PledgeRecord>;
  createdEvents: Array<CommonGoodCreatedEvent>;
  pledgedEvents: Array<PledgeEvent>;
  withdrewEvents: Array<PledgeWithdrawnEvent>;
  claimedEvents: Array<FundsClaimedEvent>;
  teamFailedEvents: Array<ProjectFailedFundraisingEvent>;
  teamSucceededEvents: Array<ProjectSucceededFundraisingEvent>;
  updatesEvents: Array<MetadataUpdatedEvent>;
  announcementEvents?: Maybe<AnnouncementEvent>;
  events: Array<EoaEventRecord>;
};


export type EoaRecordpledgesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeRecord_filter>;
};


export type EoaRecordcreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommonGoodCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CommonGoodCreatedEvent_filter>;
};


export type EoaRecordpledgedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeEvent_filter>;
};


export type EoaRecordwithdrewEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeWithdrawnEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeWithdrawnEvent_filter>;
};


export type EoaRecordclaimedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundsClaimedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FundsClaimedEvent_filter>;
};


export type EoaRecordteamFailedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectFailedFundraisingEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectFailedFundraisingEvent_filter>;
};


export type EoaRecordteamSucceededEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectSucceededFundraisingEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectSucceededFundraisingEvent_filter>;
};


export type EoaRecordupdatesEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetadataUpdatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetadataUpdatedEvent_filter>;
};


export type EoaRecordeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EoaEventRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EoaEventRecord_filter>;
};

export type EoaRecord_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeCount?: InputMaybe<Scalars['Int']>;
  pledgeCount_not?: InputMaybe<Scalars['Int']>;
  pledgeCount_gt?: InputMaybe<Scalars['Int']>;
  pledgeCount_lt?: InputMaybe<Scalars['Int']>;
  pledgeCount_gte?: InputMaybe<Scalars['Int']>;
  pledgeCount_lte?: InputMaybe<Scalars['Int']>;
  pledgeCount_in?: InputMaybe<Array<Scalars['Int']>>;
  pledgeCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount?: InputMaybe<Scalars['Int']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pledgeBestowed?: InputMaybe<Scalars['BigInt']>;
  pledgeBestowed_not?: InputMaybe<Scalars['BigInt']>;
  pledgeBestowed_gt?: InputMaybe<Scalars['BigInt']>;
  pledgeBestowed_lt?: InputMaybe<Scalars['BigInt']>;
  pledgeBestowed_gte?: InputMaybe<Scalars['BigInt']>;
  pledgeBestowed_lte?: InputMaybe<Scalars['BigInt']>;
  pledgeBestowed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeBestowed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeWithdrew?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrew_not?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrew_gt?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrew_lt?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrew_gte?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrew_lte?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrew_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeWithdrew_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedTotal?: InputMaybe<Scalars['BigInt']>;
  claimedTotal_not?: InputMaybe<Scalars['BigInt']>;
  claimedTotal_gt?: InputMaybe<Scalars['BigInt']>;
  claimedTotal_lt?: InputMaybe<Scalars['BigInt']>;
  claimedTotal_gte?: InputMaybe<Scalars['BigInt']>;
  claimedTotal_lte?: InputMaybe<Scalars['BigInt']>;
  claimedTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdCount?: InputMaybe<Scalars['Int']>;
  createdCount_not?: InputMaybe<Scalars['Int']>;
  createdCount_gt?: InputMaybe<Scalars['Int']>;
  createdCount_lt?: InputMaybe<Scalars['Int']>;
  createdCount_gte?: InputMaybe<Scalars['Int']>;
  createdCount_lte?: InputMaybe<Scalars['Int']>;
  createdCount_in?: InputMaybe<Array<Scalars['Int']>>;
  createdCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pledgedCount?: InputMaybe<Scalars['Int']>;
  pledgedCount_not?: InputMaybe<Scalars['Int']>;
  pledgedCount_gt?: InputMaybe<Scalars['Int']>;
  pledgedCount_lt?: InputMaybe<Scalars['Int']>;
  pledgedCount_gte?: InputMaybe<Scalars['Int']>;
  pledgedCount_lte?: InputMaybe<Scalars['Int']>;
  pledgedCount_in?: InputMaybe<Array<Scalars['Int']>>;
  pledgedCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrewCount?: InputMaybe<Scalars['Int']>;
  withdrewCount_not?: InputMaybe<Scalars['Int']>;
  withdrewCount_gt?: InputMaybe<Scalars['Int']>;
  withdrewCount_lt?: InputMaybe<Scalars['Int']>;
  withdrewCount_gte?: InputMaybe<Scalars['Int']>;
  withdrewCount_lte?: InputMaybe<Scalars['Int']>;
  withdrewCount_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrewCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  claimedCount?: InputMaybe<Scalars['Int']>;
  claimedCount_not?: InputMaybe<Scalars['Int']>;
  claimedCount_gt?: InputMaybe<Scalars['Int']>;
  claimedCount_lt?: InputMaybe<Scalars['Int']>;
  claimedCount_gte?: InputMaybe<Scalars['Int']>;
  claimedCount_lte?: InputMaybe<Scalars['Int']>;
  claimedCount_in?: InputMaybe<Array<Scalars['Int']>>;
  claimedCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  teamFailedCount?: InputMaybe<Scalars['Int']>;
  teamFailedCount_not?: InputMaybe<Scalars['Int']>;
  teamFailedCount_gt?: InputMaybe<Scalars['Int']>;
  teamFailedCount_lt?: InputMaybe<Scalars['Int']>;
  teamFailedCount_gte?: InputMaybe<Scalars['Int']>;
  teamFailedCount_lte?: InputMaybe<Scalars['Int']>;
  teamFailedCount_in?: InputMaybe<Array<Scalars['Int']>>;
  teamFailedCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  teamSucceededCount?: InputMaybe<Scalars['Int']>;
  teamSucceededCount_not?: InputMaybe<Scalars['Int']>;
  teamSucceededCount_gt?: InputMaybe<Scalars['Int']>;
  teamSucceededCount_lt?: InputMaybe<Scalars['Int']>;
  teamSucceededCount_gte?: InputMaybe<Scalars['Int']>;
  teamSucceededCount_lte?: InputMaybe<Scalars['Int']>;
  teamSucceededCount_in?: InputMaybe<Array<Scalars['Int']>>;
  teamSucceededCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatesCount?: InputMaybe<Scalars['Int']>;
  updatesCount_not?: InputMaybe<Scalars['Int']>;
  updatesCount_gt?: InputMaybe<Scalars['Int']>;
  updatesCount_lt?: InputMaybe<Scalars['Int']>;
  updatesCount_gte?: InputMaybe<Scalars['Int']>;
  updatesCount_lte?: InputMaybe<Scalars['Int']>;
  updatesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  updatesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  announcementCount?: InputMaybe<Scalars['Int']>;
  announcementCount_not?: InputMaybe<Scalars['Int']>;
  announcementCount_gt?: InputMaybe<Scalars['Int']>;
  announcementCount_lt?: InputMaybe<Scalars['Int']>;
  announcementCount_gte?: InputMaybe<Scalars['Int']>;
  announcementCount_lte?: InputMaybe<Scalars['Int']>;
  announcementCount_in?: InputMaybe<Array<Scalars['Int']>>;
  announcementCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pledges_?: InputMaybe<PledgeRecord_filter>;
  createdEvents_?: InputMaybe<CommonGoodCreatedEvent_filter>;
  pledgedEvents_?: InputMaybe<PledgeEvent_filter>;
  withdrewEvents_?: InputMaybe<PledgeWithdrawnEvent_filter>;
  claimedEvents_?: InputMaybe<FundsClaimedEvent_filter>;
  teamFailedEvents_?: InputMaybe<ProjectFailedFundraisingEvent_filter>;
  teamSucceededEvents_?: InputMaybe<ProjectSucceededFundraisingEvent_filter>;
  updatesEvents_?: InputMaybe<MetadataUpdatedEvent_filter>;
  announcementEvents_?: InputMaybe<AnnouncementEvent_filter>;
  events_?: InputMaybe<EoaEventRecord_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type EoaRecord_orderBy =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'pledgeCount'
  | 'withdrawCount'
  | 'pledgeBestowed'
  | 'pledgeWithdrew'
  | 'claimedTotal'
  | 'createdCount'
  | 'pledgedCount'
  | 'withdrewCount'
  | 'claimedCount'
  | 'teamFailedCount'
  | 'teamSucceededCount'
  | 'updatesCount'
  | 'announcementCount'
  | 'pledges'
  | 'createdEvents'
  | 'pledgedEvents'
  | 'withdrewEvents'
  | 'claimedEvents'
  | 'teamFailedEvents'
  | 'teamSucceededEvents'
  | 'updatesEvents'
  | 'announcementEvents'
  | 'events';

export type FactoryRecord = {
  id: Scalars['ID'];
  count: Scalars['BigInt'];
  commonGoods: Array<CommonGoodRecord>;
};


export type FactoryRecordcommonGoodsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommonGoodRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CommonGoodRecord_filter>;
};

export type FactoryRecord_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoods_?: InputMaybe<CommonGoodRecord_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type FactoryRecord_orderBy =
  | 'id'
  | 'count'
  | 'commonGoods';

export type FundsClaimedEvent = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  commonGood: CommonGoodRecord;
  by: EoaRecord;
  amount: Scalars['BigInt'];
};

export type FundsClaimedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  by?: InputMaybe<Scalars['String']>;
  by_not?: InputMaybe<Scalars['String']>;
  by_gt?: InputMaybe<Scalars['String']>;
  by_lt?: InputMaybe<Scalars['String']>;
  by_gte?: InputMaybe<Scalars['String']>;
  by_lte?: InputMaybe<Scalars['String']>;
  by_in?: InputMaybe<Array<Scalars['String']>>;
  by_not_in?: InputMaybe<Array<Scalars['String']>>;
  by_contains?: InputMaybe<Scalars['String']>;
  by_contains_nocase?: InputMaybe<Scalars['String']>;
  by_not_contains?: InputMaybe<Scalars['String']>;
  by_not_contains_nocase?: InputMaybe<Scalars['String']>;
  by_starts_with?: InputMaybe<Scalars['String']>;
  by_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_starts_with?: InputMaybe<Scalars['String']>;
  by_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_ends_with?: InputMaybe<Scalars['String']>;
  by_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_ends_with?: InputMaybe<Scalars['String']>;
  by_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_?: InputMaybe<EoaRecord_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type FundsClaimedEvent_orderBy =
  | 'id'
  | 'txHash'
  | 'timestamp'
  | 'commonGood'
  | 'by'
  | 'amount';

export type MetadataUpdatedEvent = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  commonGood: CommonGoodRecord;
  CID: Scalars['Bytes'];
  contents: Scalars['String'];
  by: EoaRecord;
};

export type MetadataUpdatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  CID?: InputMaybe<Scalars['Bytes']>;
  CID_not?: InputMaybe<Scalars['Bytes']>;
  CID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  CID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  CID_contains?: InputMaybe<Scalars['Bytes']>;
  CID_not_contains?: InputMaybe<Scalars['Bytes']>;
  contents?: InputMaybe<Scalars['String']>;
  contents_not?: InputMaybe<Scalars['String']>;
  contents_gt?: InputMaybe<Scalars['String']>;
  contents_lt?: InputMaybe<Scalars['String']>;
  contents_gte?: InputMaybe<Scalars['String']>;
  contents_lte?: InputMaybe<Scalars['String']>;
  contents_in?: InputMaybe<Array<Scalars['String']>>;
  contents_not_in?: InputMaybe<Array<Scalars['String']>>;
  contents_contains?: InputMaybe<Scalars['String']>;
  contents_contains_nocase?: InputMaybe<Scalars['String']>;
  contents_not_contains?: InputMaybe<Scalars['String']>;
  contents_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contents_starts_with?: InputMaybe<Scalars['String']>;
  contents_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contents_not_starts_with?: InputMaybe<Scalars['String']>;
  contents_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contents_ends_with?: InputMaybe<Scalars['String']>;
  contents_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contents_not_ends_with?: InputMaybe<Scalars['String']>;
  contents_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by?: InputMaybe<Scalars['String']>;
  by_not?: InputMaybe<Scalars['String']>;
  by_gt?: InputMaybe<Scalars['String']>;
  by_lt?: InputMaybe<Scalars['String']>;
  by_gte?: InputMaybe<Scalars['String']>;
  by_lte?: InputMaybe<Scalars['String']>;
  by_in?: InputMaybe<Array<Scalars['String']>>;
  by_not_in?: InputMaybe<Array<Scalars['String']>>;
  by_contains?: InputMaybe<Scalars['String']>;
  by_contains_nocase?: InputMaybe<Scalars['String']>;
  by_not_contains?: InputMaybe<Scalars['String']>;
  by_not_contains_nocase?: InputMaybe<Scalars['String']>;
  by_starts_with?: InputMaybe<Scalars['String']>;
  by_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_starts_with?: InputMaybe<Scalars['String']>;
  by_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_ends_with?: InputMaybe<Scalars['String']>;
  by_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_ends_with?: InputMaybe<Scalars['String']>;
  by_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_?: InputMaybe<EoaRecord_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MetadataUpdatedEvent_orderBy =
  | 'id'
  | 'txHash'
  | 'timestamp'
  | 'commonGood'
  | 'CID'
  | 'contents'
  | 'by';

export type MilestoneRecord = {
  id: Scalars['ID'];
  index: Scalars['Int'];
  startDate: Scalars['BigInt'];
  duration: Scalars['BigInt'];
  minRaisedAmount: Scalars['BigInt'];
  fundReleaseAmount: Scalars['BigInt'];
  CID: Scalars['Bytes'];
  commonGood: CommonGoodRecord;
  status: MilestoneRecordStatus;
};

export type MilestoneRecordStatus =
  | 'UPCOMING'
  | 'ACTIVE'
  | 'FAILED'
  | 'SUCCEEDED';

export type MilestoneRecord_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['Int']>;
  index_not?: InputMaybe<Scalars['Int']>;
  index_gt?: InputMaybe<Scalars['Int']>;
  index_lt?: InputMaybe<Scalars['Int']>;
  index_gte?: InputMaybe<Scalars['Int']>;
  index_lte?: InputMaybe<Scalars['Int']>;
  index_in?: InputMaybe<Array<Scalars['Int']>>;
  index_not_in?: InputMaybe<Array<Scalars['Int']>>;
  startDate?: InputMaybe<Scalars['BigInt']>;
  startDate_not?: InputMaybe<Scalars['BigInt']>;
  startDate_gt?: InputMaybe<Scalars['BigInt']>;
  startDate_lt?: InputMaybe<Scalars['BigInt']>;
  startDate_gte?: InputMaybe<Scalars['BigInt']>;
  startDate_lte?: InputMaybe<Scalars['BigInt']>;
  startDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  duration?: InputMaybe<Scalars['BigInt']>;
  duration_not?: InputMaybe<Scalars['BigInt']>;
  duration_gt?: InputMaybe<Scalars['BigInt']>;
  duration_lt?: InputMaybe<Scalars['BigInt']>;
  duration_gte?: InputMaybe<Scalars['BigInt']>;
  duration_lte?: InputMaybe<Scalars['BigInt']>;
  duration_in?: InputMaybe<Array<Scalars['BigInt']>>;
  duration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minRaisedAmount?: InputMaybe<Scalars['BigInt']>;
  minRaisedAmount_not?: InputMaybe<Scalars['BigInt']>;
  minRaisedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  minRaisedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  minRaisedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  minRaisedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  minRaisedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minRaisedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundReleaseAmount?: InputMaybe<Scalars['BigInt']>;
  fundReleaseAmount_not?: InputMaybe<Scalars['BigInt']>;
  fundReleaseAmount_gt?: InputMaybe<Scalars['BigInt']>;
  fundReleaseAmount_lt?: InputMaybe<Scalars['BigInt']>;
  fundReleaseAmount_gte?: InputMaybe<Scalars['BigInt']>;
  fundReleaseAmount_lte?: InputMaybe<Scalars['BigInt']>;
  fundReleaseAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundReleaseAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  CID?: InputMaybe<Scalars['Bytes']>;
  CID_not?: InputMaybe<Scalars['Bytes']>;
  CID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  CID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  CID_contains?: InputMaybe<Scalars['Bytes']>;
  CID_not_contains?: InputMaybe<Scalars['Bytes']>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  status?: InputMaybe<MilestoneRecordStatus>;
  status_not?: InputMaybe<MilestoneRecordStatus>;
  status_in?: InputMaybe<Array<MilestoneRecordStatus>>;
  status_not_in?: InputMaybe<Array<MilestoneRecordStatus>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MilestoneRecord_orderBy =
  | 'id'
  | 'index'
  | 'startDate'
  | 'duration'
  | 'minRaisedAmount'
  | 'fundReleaseAmount'
  | 'CID'
  | 'commonGood'
  | 'status';

export type NextMilestoneStartedEvent = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  current: MilestoneRecord;
  commonGood: CommonGoodRecord;
};

export type NextMilestoneStartedEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  current?: InputMaybe<Scalars['String']>;
  current_not?: InputMaybe<Scalars['String']>;
  current_gt?: InputMaybe<Scalars['String']>;
  current_lt?: InputMaybe<Scalars['String']>;
  current_gte?: InputMaybe<Scalars['String']>;
  current_lte?: InputMaybe<Scalars['String']>;
  current_in?: InputMaybe<Array<Scalars['String']>>;
  current_not_in?: InputMaybe<Array<Scalars['String']>>;
  current_contains?: InputMaybe<Scalars['String']>;
  current_contains_nocase?: InputMaybe<Scalars['String']>;
  current_not_contains?: InputMaybe<Scalars['String']>;
  current_not_contains_nocase?: InputMaybe<Scalars['String']>;
  current_starts_with?: InputMaybe<Scalars['String']>;
  current_starts_with_nocase?: InputMaybe<Scalars['String']>;
  current_not_starts_with?: InputMaybe<Scalars['String']>;
  current_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  current_ends_with?: InputMaybe<Scalars['String']>;
  current_ends_with_nocase?: InputMaybe<Scalars['String']>;
  current_not_ends_with?: InputMaybe<Scalars['String']>;
  current_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  current_?: InputMaybe<MilestoneRecord_filter>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NextMilestoneStartedEvent_orderBy =
  | 'id'
  | 'txHash'
  | 'timestamp'
  | 'current'
  | 'commonGood';

export type PledgeEvent = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  commonGood: CommonGoodRecord;
  pledge: PledgeRecord;
  comment: Scalars['String'];
  amount: Scalars['BigInt'];
  by: EoaRecord;
  pledgeBalance: Scalars['BigInt'];
  pledgeRaised: Scalars['BigInt'];
  pledgeWithdrawnAmount: Scalars['BigInt'];
  pledgePledges: Scalars['Int'];
  pledgeWithdrawCount: Scalars['Int'];
  commonGoodRaised: Scalars['BigInt'];
  commonGoodBalance: Scalars['BigInt'];
  commonGoodWithdrawnAmount: Scalars['BigInt'];
  commonGoodPledgerCount: Scalars['Int'];
};

export type PledgeEventRecord = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  pledge: PledgeRecord;
  timestamp: Scalars['BigInt'];
  commonGood: CommonGoodRecord;
  pledged?: Maybe<PledgeEvent>;
  withdrew?: Maybe<PledgeWithdrawnEvent>;
};

export type PledgeEventRecord_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  pledge?: InputMaybe<Scalars['String']>;
  pledge_not?: InputMaybe<Scalars['String']>;
  pledge_gt?: InputMaybe<Scalars['String']>;
  pledge_lt?: InputMaybe<Scalars['String']>;
  pledge_gte?: InputMaybe<Scalars['String']>;
  pledge_lte?: InputMaybe<Scalars['String']>;
  pledge_in?: InputMaybe<Array<Scalars['String']>>;
  pledge_not_in?: InputMaybe<Array<Scalars['String']>>;
  pledge_contains?: InputMaybe<Scalars['String']>;
  pledge_contains_nocase?: InputMaybe<Scalars['String']>;
  pledge_not_contains?: InputMaybe<Scalars['String']>;
  pledge_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pledge_starts_with?: InputMaybe<Scalars['String']>;
  pledge_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pledge_not_starts_with?: InputMaybe<Scalars['String']>;
  pledge_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pledge_ends_with?: InputMaybe<Scalars['String']>;
  pledge_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pledge_not_ends_with?: InputMaybe<Scalars['String']>;
  pledge_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pledge_?: InputMaybe<PledgeRecord_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  pledged?: InputMaybe<Scalars['String']>;
  pledged_not?: InputMaybe<Scalars['String']>;
  pledged_gt?: InputMaybe<Scalars['String']>;
  pledged_lt?: InputMaybe<Scalars['String']>;
  pledged_gte?: InputMaybe<Scalars['String']>;
  pledged_lte?: InputMaybe<Scalars['String']>;
  pledged_in?: InputMaybe<Array<Scalars['String']>>;
  pledged_not_in?: InputMaybe<Array<Scalars['String']>>;
  pledged_contains?: InputMaybe<Scalars['String']>;
  pledged_contains_nocase?: InputMaybe<Scalars['String']>;
  pledged_not_contains?: InputMaybe<Scalars['String']>;
  pledged_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pledged_starts_with?: InputMaybe<Scalars['String']>;
  pledged_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pledged_not_starts_with?: InputMaybe<Scalars['String']>;
  pledged_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pledged_ends_with?: InputMaybe<Scalars['String']>;
  pledged_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pledged_not_ends_with?: InputMaybe<Scalars['String']>;
  pledged_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pledged_?: InputMaybe<PledgeEvent_filter>;
  withdrew?: InputMaybe<Scalars['String']>;
  withdrew_not?: InputMaybe<Scalars['String']>;
  withdrew_gt?: InputMaybe<Scalars['String']>;
  withdrew_lt?: InputMaybe<Scalars['String']>;
  withdrew_gte?: InputMaybe<Scalars['String']>;
  withdrew_lte?: InputMaybe<Scalars['String']>;
  withdrew_in?: InputMaybe<Array<Scalars['String']>>;
  withdrew_not_in?: InputMaybe<Array<Scalars['String']>>;
  withdrew_contains?: InputMaybe<Scalars['String']>;
  withdrew_contains_nocase?: InputMaybe<Scalars['String']>;
  withdrew_not_contains?: InputMaybe<Scalars['String']>;
  withdrew_not_contains_nocase?: InputMaybe<Scalars['String']>;
  withdrew_starts_with?: InputMaybe<Scalars['String']>;
  withdrew_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrew_not_starts_with?: InputMaybe<Scalars['String']>;
  withdrew_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrew_ends_with?: InputMaybe<Scalars['String']>;
  withdrew_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrew_not_ends_with?: InputMaybe<Scalars['String']>;
  withdrew_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrew_?: InputMaybe<PledgeWithdrawnEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PledgeEventRecord_orderBy =
  | 'id'
  | 'txHash'
  | 'pledge'
  | 'timestamp'
  | 'commonGood'
  | 'pledged'
  | 'withdrew';

export type PledgeEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  pledge?: InputMaybe<Scalars['String']>;
  pledge_not?: InputMaybe<Scalars['String']>;
  pledge_gt?: InputMaybe<Scalars['String']>;
  pledge_lt?: InputMaybe<Scalars['String']>;
  pledge_gte?: InputMaybe<Scalars['String']>;
  pledge_lte?: InputMaybe<Scalars['String']>;
  pledge_in?: InputMaybe<Array<Scalars['String']>>;
  pledge_not_in?: InputMaybe<Array<Scalars['String']>>;
  pledge_contains?: InputMaybe<Scalars['String']>;
  pledge_contains_nocase?: InputMaybe<Scalars['String']>;
  pledge_not_contains?: InputMaybe<Scalars['String']>;
  pledge_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pledge_starts_with?: InputMaybe<Scalars['String']>;
  pledge_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pledge_not_starts_with?: InputMaybe<Scalars['String']>;
  pledge_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pledge_ends_with?: InputMaybe<Scalars['String']>;
  pledge_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pledge_not_ends_with?: InputMaybe<Scalars['String']>;
  pledge_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pledge_?: InputMaybe<PledgeRecord_filter>;
  comment?: InputMaybe<Scalars['String']>;
  comment_not?: InputMaybe<Scalars['String']>;
  comment_gt?: InputMaybe<Scalars['String']>;
  comment_lt?: InputMaybe<Scalars['String']>;
  comment_gte?: InputMaybe<Scalars['String']>;
  comment_lte?: InputMaybe<Scalars['String']>;
  comment_in?: InputMaybe<Array<Scalars['String']>>;
  comment_not_in?: InputMaybe<Array<Scalars['String']>>;
  comment_contains?: InputMaybe<Scalars['String']>;
  comment_contains_nocase?: InputMaybe<Scalars['String']>;
  comment_not_contains?: InputMaybe<Scalars['String']>;
  comment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  comment_starts_with?: InputMaybe<Scalars['String']>;
  comment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  comment_not_starts_with?: InputMaybe<Scalars['String']>;
  comment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  comment_ends_with?: InputMaybe<Scalars['String']>;
  comment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  comment_not_ends_with?: InputMaybe<Scalars['String']>;
  comment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  by?: InputMaybe<Scalars['String']>;
  by_not?: InputMaybe<Scalars['String']>;
  by_gt?: InputMaybe<Scalars['String']>;
  by_lt?: InputMaybe<Scalars['String']>;
  by_gte?: InputMaybe<Scalars['String']>;
  by_lte?: InputMaybe<Scalars['String']>;
  by_in?: InputMaybe<Array<Scalars['String']>>;
  by_not_in?: InputMaybe<Array<Scalars['String']>>;
  by_contains?: InputMaybe<Scalars['String']>;
  by_contains_nocase?: InputMaybe<Scalars['String']>;
  by_not_contains?: InputMaybe<Scalars['String']>;
  by_not_contains_nocase?: InputMaybe<Scalars['String']>;
  by_starts_with?: InputMaybe<Scalars['String']>;
  by_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_starts_with?: InputMaybe<Scalars['String']>;
  by_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_ends_with?: InputMaybe<Scalars['String']>;
  by_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_ends_with?: InputMaybe<Scalars['String']>;
  by_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_?: InputMaybe<EoaRecord_filter>;
  pledgeBalance?: InputMaybe<Scalars['BigInt']>;
  pledgeBalance_not?: InputMaybe<Scalars['BigInt']>;
  pledgeBalance_gt?: InputMaybe<Scalars['BigInt']>;
  pledgeBalance_lt?: InputMaybe<Scalars['BigInt']>;
  pledgeBalance_gte?: InputMaybe<Scalars['BigInt']>;
  pledgeBalance_lte?: InputMaybe<Scalars['BigInt']>;
  pledgeBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeRaised?: InputMaybe<Scalars['BigInt']>;
  pledgeRaised_not?: InputMaybe<Scalars['BigInt']>;
  pledgeRaised_gt?: InputMaybe<Scalars['BigInt']>;
  pledgeRaised_lt?: InputMaybe<Scalars['BigInt']>;
  pledgeRaised_gte?: InputMaybe<Scalars['BigInt']>;
  pledgeRaised_lte?: InputMaybe<Scalars['BigInt']>;
  pledgeRaised_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeRaised_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeWithdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeWithdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgePledges?: InputMaybe<Scalars['Int']>;
  pledgePledges_not?: InputMaybe<Scalars['Int']>;
  pledgePledges_gt?: InputMaybe<Scalars['Int']>;
  pledgePledges_lt?: InputMaybe<Scalars['Int']>;
  pledgePledges_gte?: InputMaybe<Scalars['Int']>;
  pledgePledges_lte?: InputMaybe<Scalars['Int']>;
  pledgePledges_in?: InputMaybe<Array<Scalars['Int']>>;
  pledgePledges_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pledgeWithdrawCount?: InputMaybe<Scalars['Int']>;
  pledgeWithdrawCount_not?: InputMaybe<Scalars['Int']>;
  pledgeWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
  pledgeWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
  pledgeWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
  pledgeWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
  pledgeWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  pledgeWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  commonGoodRaised?: InputMaybe<Scalars['BigInt']>;
  commonGoodRaised_not?: InputMaybe<Scalars['BigInt']>;
  commonGoodRaised_gt?: InputMaybe<Scalars['BigInt']>;
  commonGoodRaised_lt?: InputMaybe<Scalars['BigInt']>;
  commonGoodRaised_gte?: InputMaybe<Scalars['BigInt']>;
  commonGoodRaised_lte?: InputMaybe<Scalars['BigInt']>;
  commonGoodRaised_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoodRaised_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoodBalance?: InputMaybe<Scalars['BigInt']>;
  commonGoodBalance_not?: InputMaybe<Scalars['BigInt']>;
  commonGoodBalance_gt?: InputMaybe<Scalars['BigInt']>;
  commonGoodBalance_lt?: InputMaybe<Scalars['BigInt']>;
  commonGoodBalance_gte?: InputMaybe<Scalars['BigInt']>;
  commonGoodBalance_lte?: InputMaybe<Scalars['BigInt']>;
  commonGoodBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoodBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoodWithdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  commonGoodWithdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  commonGoodWithdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  commonGoodWithdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  commonGoodWithdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  commonGoodWithdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  commonGoodWithdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoodWithdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoodPledgerCount?: InputMaybe<Scalars['Int']>;
  commonGoodPledgerCount_not?: InputMaybe<Scalars['Int']>;
  commonGoodPledgerCount_gt?: InputMaybe<Scalars['Int']>;
  commonGoodPledgerCount_lt?: InputMaybe<Scalars['Int']>;
  commonGoodPledgerCount_gte?: InputMaybe<Scalars['Int']>;
  commonGoodPledgerCount_lte?: InputMaybe<Scalars['Int']>;
  commonGoodPledgerCount_in?: InputMaybe<Array<Scalars['Int']>>;
  commonGoodPledgerCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PledgeEvent_orderBy =
  | 'id'
  | 'txHash'
  | 'timestamp'
  | 'commonGood'
  | 'pledge'
  | 'comment'
  | 'amount'
  | 'by'
  | 'pledgeBalance'
  | 'pledgeRaised'
  | 'pledgeWithdrawnAmount'
  | 'pledgePledges'
  | 'pledgeWithdrawCount'
  | 'commonGoodRaised'
  | 'commonGoodBalance'
  | 'commonGoodWithdrawnAmount'
  | 'commonGoodPledgerCount';

export type PledgeRecord = {
  id: Scalars['ID'];
  by: EoaRecord;
  commonGood: CommonGoodRecord;
  balance: Scalars['BigInt'];
  raised: Scalars['BigInt'];
  withdrawnAmount: Scalars['BigInt'];
  pledges: Scalars['Int'];
  withdrawCount: Scalars['Int'];
  withdrawn: Scalars['Boolean'];
  pledgeEvents: Array<PledgeEvent>;
  withdrawEvent: Array<PledgeWithdrawnEvent>;
  events: Array<PledgeEventRecord>;
};


export type PledgeRecordpledgeEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeEvent_filter>;
};


export type PledgeRecordwithdrawEventArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeWithdrawnEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeWithdrawnEvent_filter>;
};


export type PledgeRecordeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PledgeEventRecord_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PledgeEventRecord_filter>;
};

export type PledgeRecord_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  by?: InputMaybe<Scalars['String']>;
  by_not?: InputMaybe<Scalars['String']>;
  by_gt?: InputMaybe<Scalars['String']>;
  by_lt?: InputMaybe<Scalars['String']>;
  by_gte?: InputMaybe<Scalars['String']>;
  by_lte?: InputMaybe<Scalars['String']>;
  by_in?: InputMaybe<Array<Scalars['String']>>;
  by_not_in?: InputMaybe<Array<Scalars['String']>>;
  by_contains?: InputMaybe<Scalars['String']>;
  by_contains_nocase?: InputMaybe<Scalars['String']>;
  by_not_contains?: InputMaybe<Scalars['String']>;
  by_not_contains_nocase?: InputMaybe<Scalars['String']>;
  by_starts_with?: InputMaybe<Scalars['String']>;
  by_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_starts_with?: InputMaybe<Scalars['String']>;
  by_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_ends_with?: InputMaybe<Scalars['String']>;
  by_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_ends_with?: InputMaybe<Scalars['String']>;
  by_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_?: InputMaybe<EoaRecord_filter>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  raised?: InputMaybe<Scalars['BigInt']>;
  raised_not?: InputMaybe<Scalars['BigInt']>;
  raised_gt?: InputMaybe<Scalars['BigInt']>;
  raised_lt?: InputMaybe<Scalars['BigInt']>;
  raised_gte?: InputMaybe<Scalars['BigInt']>;
  raised_lte?: InputMaybe<Scalars['BigInt']>;
  raised_in?: InputMaybe<Array<Scalars['BigInt']>>;
  raised_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledges?: InputMaybe<Scalars['Int']>;
  pledges_not?: InputMaybe<Scalars['Int']>;
  pledges_gt?: InputMaybe<Scalars['Int']>;
  pledges_lt?: InputMaybe<Scalars['Int']>;
  pledges_gte?: InputMaybe<Scalars['Int']>;
  pledges_lte?: InputMaybe<Scalars['Int']>;
  pledges_in?: InputMaybe<Array<Scalars['Int']>>;
  pledges_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount?: InputMaybe<Scalars['Int']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawn?: InputMaybe<Scalars['Boolean']>;
  withdrawn_not?: InputMaybe<Scalars['Boolean']>;
  withdrawn_in?: InputMaybe<Array<Scalars['Boolean']>>;
  withdrawn_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  pledgeEvents_?: InputMaybe<PledgeEvent_filter>;
  withdrawEvent_?: InputMaybe<PledgeWithdrawnEvent_filter>;
  events_?: InputMaybe<PledgeEventRecord_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PledgeRecord_orderBy =
  | 'id'
  | 'by'
  | 'commonGood'
  | 'balance'
  | 'raised'
  | 'withdrawnAmount'
  | 'pledges'
  | 'withdrawCount'
  | 'withdrawn'
  | 'pledgeEvents'
  | 'withdrawEvent'
  | 'events';

export type PledgeWithdrawnEvent = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  commonGood: CommonGoodRecord;
  pledge: PledgeRecord;
  amountWithdrawn: Scalars['BigInt'];
  by: EoaRecord;
  pledgeBalance: Scalars['BigInt'];
  pledgeRaised: Scalars['BigInt'];
  pledgeWithdrawnAmount: Scalars['BigInt'];
  pledgePledges: Scalars['Int'];
  pledgeWithdrawCount: Scalars['Int'];
  commonGoodRaised: Scalars['BigInt'];
  commonGoodBalance: Scalars['BigInt'];
  commonGoodWithdrawnAmount: Scalars['BigInt'];
  commonGoodPledgerCount: Scalars['Int'];
};

export type PledgeWithdrawnEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  pledge?: InputMaybe<Scalars['String']>;
  pledge_not?: InputMaybe<Scalars['String']>;
  pledge_gt?: InputMaybe<Scalars['String']>;
  pledge_lt?: InputMaybe<Scalars['String']>;
  pledge_gte?: InputMaybe<Scalars['String']>;
  pledge_lte?: InputMaybe<Scalars['String']>;
  pledge_in?: InputMaybe<Array<Scalars['String']>>;
  pledge_not_in?: InputMaybe<Array<Scalars['String']>>;
  pledge_contains?: InputMaybe<Scalars['String']>;
  pledge_contains_nocase?: InputMaybe<Scalars['String']>;
  pledge_not_contains?: InputMaybe<Scalars['String']>;
  pledge_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pledge_starts_with?: InputMaybe<Scalars['String']>;
  pledge_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pledge_not_starts_with?: InputMaybe<Scalars['String']>;
  pledge_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pledge_ends_with?: InputMaybe<Scalars['String']>;
  pledge_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pledge_not_ends_with?: InputMaybe<Scalars['String']>;
  pledge_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pledge_?: InputMaybe<PledgeRecord_filter>;
  amountWithdrawn?: InputMaybe<Scalars['BigInt']>;
  amountWithdrawn_not?: InputMaybe<Scalars['BigInt']>;
  amountWithdrawn_gt?: InputMaybe<Scalars['BigInt']>;
  amountWithdrawn_lt?: InputMaybe<Scalars['BigInt']>;
  amountWithdrawn_gte?: InputMaybe<Scalars['BigInt']>;
  amountWithdrawn_lte?: InputMaybe<Scalars['BigInt']>;
  amountWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  by?: InputMaybe<Scalars['String']>;
  by_not?: InputMaybe<Scalars['String']>;
  by_gt?: InputMaybe<Scalars['String']>;
  by_lt?: InputMaybe<Scalars['String']>;
  by_gte?: InputMaybe<Scalars['String']>;
  by_lte?: InputMaybe<Scalars['String']>;
  by_in?: InputMaybe<Array<Scalars['String']>>;
  by_not_in?: InputMaybe<Array<Scalars['String']>>;
  by_contains?: InputMaybe<Scalars['String']>;
  by_contains_nocase?: InputMaybe<Scalars['String']>;
  by_not_contains?: InputMaybe<Scalars['String']>;
  by_not_contains_nocase?: InputMaybe<Scalars['String']>;
  by_starts_with?: InputMaybe<Scalars['String']>;
  by_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_starts_with?: InputMaybe<Scalars['String']>;
  by_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  by_ends_with?: InputMaybe<Scalars['String']>;
  by_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_not_ends_with?: InputMaybe<Scalars['String']>;
  by_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  by_?: InputMaybe<EoaRecord_filter>;
  pledgeBalance?: InputMaybe<Scalars['BigInt']>;
  pledgeBalance_not?: InputMaybe<Scalars['BigInt']>;
  pledgeBalance_gt?: InputMaybe<Scalars['BigInt']>;
  pledgeBalance_lt?: InputMaybe<Scalars['BigInt']>;
  pledgeBalance_gte?: InputMaybe<Scalars['BigInt']>;
  pledgeBalance_lte?: InputMaybe<Scalars['BigInt']>;
  pledgeBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeRaised?: InputMaybe<Scalars['BigInt']>;
  pledgeRaised_not?: InputMaybe<Scalars['BigInt']>;
  pledgeRaised_gt?: InputMaybe<Scalars['BigInt']>;
  pledgeRaised_lt?: InputMaybe<Scalars['BigInt']>;
  pledgeRaised_gte?: InputMaybe<Scalars['BigInt']>;
  pledgeRaised_lte?: InputMaybe<Scalars['BigInt']>;
  pledgeRaised_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeRaised_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeWithdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  pledgeWithdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgeWithdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pledgePledges?: InputMaybe<Scalars['Int']>;
  pledgePledges_not?: InputMaybe<Scalars['Int']>;
  pledgePledges_gt?: InputMaybe<Scalars['Int']>;
  pledgePledges_lt?: InputMaybe<Scalars['Int']>;
  pledgePledges_gte?: InputMaybe<Scalars['Int']>;
  pledgePledges_lte?: InputMaybe<Scalars['Int']>;
  pledgePledges_in?: InputMaybe<Array<Scalars['Int']>>;
  pledgePledges_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pledgeWithdrawCount?: InputMaybe<Scalars['Int']>;
  pledgeWithdrawCount_not?: InputMaybe<Scalars['Int']>;
  pledgeWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
  pledgeWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
  pledgeWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
  pledgeWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
  pledgeWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  pledgeWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  commonGoodRaised?: InputMaybe<Scalars['BigInt']>;
  commonGoodRaised_not?: InputMaybe<Scalars['BigInt']>;
  commonGoodRaised_gt?: InputMaybe<Scalars['BigInt']>;
  commonGoodRaised_lt?: InputMaybe<Scalars['BigInt']>;
  commonGoodRaised_gte?: InputMaybe<Scalars['BigInt']>;
  commonGoodRaised_lte?: InputMaybe<Scalars['BigInt']>;
  commonGoodRaised_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoodRaised_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoodBalance?: InputMaybe<Scalars['BigInt']>;
  commonGoodBalance_not?: InputMaybe<Scalars['BigInt']>;
  commonGoodBalance_gt?: InputMaybe<Scalars['BigInt']>;
  commonGoodBalance_lt?: InputMaybe<Scalars['BigInt']>;
  commonGoodBalance_gte?: InputMaybe<Scalars['BigInt']>;
  commonGoodBalance_lte?: InputMaybe<Scalars['BigInt']>;
  commonGoodBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoodBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoodWithdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  commonGoodWithdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  commonGoodWithdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  commonGoodWithdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  commonGoodWithdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  commonGoodWithdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  commonGoodWithdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoodWithdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGoodPledgerCount?: InputMaybe<Scalars['Int']>;
  commonGoodPledgerCount_not?: InputMaybe<Scalars['Int']>;
  commonGoodPledgerCount_gt?: InputMaybe<Scalars['Int']>;
  commonGoodPledgerCount_lt?: InputMaybe<Scalars['Int']>;
  commonGoodPledgerCount_gte?: InputMaybe<Scalars['Int']>;
  commonGoodPledgerCount_lte?: InputMaybe<Scalars['Int']>;
  commonGoodPledgerCount_in?: InputMaybe<Array<Scalars['Int']>>;
  commonGoodPledgerCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PledgeWithdrawnEvent_orderBy =
  | 'id'
  | 'txHash'
  | 'timestamp'
  | 'commonGood'
  | 'pledge'
  | 'amountWithdrawn'
  | 'by'
  | 'pledgeBalance'
  | 'pledgeRaised'
  | 'pledgeWithdrawnAmount'
  | 'pledgePledges'
  | 'pledgeWithdrawCount'
  | 'commonGoodRaised'
  | 'commonGoodBalance'
  | 'commonGoodWithdrawnAmount'
  | 'commonGoodPledgerCount';

export type ProjectFailedFundraisingEvent = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  commonGood: CommonGoodRecord;
  fundsRaised: Scalars['BigInt'];
  team: EoaRecord;
  milestone: MilestoneRecord;
};

export type ProjectFailedFundraisingEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  fundsRaised?: InputMaybe<Scalars['BigInt']>;
  fundsRaised_not?: InputMaybe<Scalars['BigInt']>;
  fundsRaised_gt?: InputMaybe<Scalars['BigInt']>;
  fundsRaised_lt?: InputMaybe<Scalars['BigInt']>;
  fundsRaised_gte?: InputMaybe<Scalars['BigInt']>;
  fundsRaised_lte?: InputMaybe<Scalars['BigInt']>;
  fundsRaised_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundsRaised_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  team?: InputMaybe<Scalars['String']>;
  team_not?: InputMaybe<Scalars['String']>;
  team_gt?: InputMaybe<Scalars['String']>;
  team_lt?: InputMaybe<Scalars['String']>;
  team_gte?: InputMaybe<Scalars['String']>;
  team_lte?: InputMaybe<Scalars['String']>;
  team_in?: InputMaybe<Array<Scalars['String']>>;
  team_not_in?: InputMaybe<Array<Scalars['String']>>;
  team_contains?: InputMaybe<Scalars['String']>;
  team_contains_nocase?: InputMaybe<Scalars['String']>;
  team_not_contains?: InputMaybe<Scalars['String']>;
  team_not_contains_nocase?: InputMaybe<Scalars['String']>;
  team_starts_with?: InputMaybe<Scalars['String']>;
  team_starts_with_nocase?: InputMaybe<Scalars['String']>;
  team_not_starts_with?: InputMaybe<Scalars['String']>;
  team_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  team_ends_with?: InputMaybe<Scalars['String']>;
  team_ends_with_nocase?: InputMaybe<Scalars['String']>;
  team_not_ends_with?: InputMaybe<Scalars['String']>;
  team_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  team_?: InputMaybe<EoaRecord_filter>;
  milestone?: InputMaybe<Scalars['String']>;
  milestone_not?: InputMaybe<Scalars['String']>;
  milestone_gt?: InputMaybe<Scalars['String']>;
  milestone_lt?: InputMaybe<Scalars['String']>;
  milestone_gte?: InputMaybe<Scalars['String']>;
  milestone_lte?: InputMaybe<Scalars['String']>;
  milestone_in?: InputMaybe<Array<Scalars['String']>>;
  milestone_not_in?: InputMaybe<Array<Scalars['String']>>;
  milestone_contains?: InputMaybe<Scalars['String']>;
  milestone_contains_nocase?: InputMaybe<Scalars['String']>;
  milestone_not_contains?: InputMaybe<Scalars['String']>;
  milestone_not_contains_nocase?: InputMaybe<Scalars['String']>;
  milestone_starts_with?: InputMaybe<Scalars['String']>;
  milestone_starts_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_not_starts_with?: InputMaybe<Scalars['String']>;
  milestone_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_ends_with?: InputMaybe<Scalars['String']>;
  milestone_ends_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_not_ends_with?: InputMaybe<Scalars['String']>;
  milestone_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_?: InputMaybe<MilestoneRecord_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ProjectFailedFundraisingEvent_orderBy =
  | 'id'
  | 'txHash'
  | 'timestamp'
  | 'commonGood'
  | 'fundsRaised'
  | 'team'
  | 'milestone';

export type ProjectSucceededFundraisingEvent = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  commonGood: CommonGoodRecord;
  fundsRaised: Scalars['BigInt'];
  team: EoaRecord;
  milestone: MilestoneRecord;
};

export type ProjectSucceededFundraisingEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commonGood?: InputMaybe<Scalars['String']>;
  commonGood_not?: InputMaybe<Scalars['String']>;
  commonGood_gt?: InputMaybe<Scalars['String']>;
  commonGood_lt?: InputMaybe<Scalars['String']>;
  commonGood_gte?: InputMaybe<Scalars['String']>;
  commonGood_lte?: InputMaybe<Scalars['String']>;
  commonGood_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_not_in?: InputMaybe<Array<Scalars['String']>>;
  commonGood_contains?: InputMaybe<Scalars['String']>;
  commonGood_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_contains?: InputMaybe<Scalars['String']>;
  commonGood_not_contains_nocase?: InputMaybe<Scalars['String']>;
  commonGood_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with?: InputMaybe<Scalars['String']>;
  commonGood_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with?: InputMaybe<Scalars['String']>;
  commonGood_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  commonGood_?: InputMaybe<CommonGoodRecord_filter>;
  fundsRaised?: InputMaybe<Scalars['BigInt']>;
  fundsRaised_not?: InputMaybe<Scalars['BigInt']>;
  fundsRaised_gt?: InputMaybe<Scalars['BigInt']>;
  fundsRaised_lt?: InputMaybe<Scalars['BigInt']>;
  fundsRaised_gte?: InputMaybe<Scalars['BigInt']>;
  fundsRaised_lte?: InputMaybe<Scalars['BigInt']>;
  fundsRaised_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundsRaised_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  team?: InputMaybe<Scalars['String']>;
  team_not?: InputMaybe<Scalars['String']>;
  team_gt?: InputMaybe<Scalars['String']>;
  team_lt?: InputMaybe<Scalars['String']>;
  team_gte?: InputMaybe<Scalars['String']>;
  team_lte?: InputMaybe<Scalars['String']>;
  team_in?: InputMaybe<Array<Scalars['String']>>;
  team_not_in?: InputMaybe<Array<Scalars['String']>>;
  team_contains?: InputMaybe<Scalars['String']>;
  team_contains_nocase?: InputMaybe<Scalars['String']>;
  team_not_contains?: InputMaybe<Scalars['String']>;
  team_not_contains_nocase?: InputMaybe<Scalars['String']>;
  team_starts_with?: InputMaybe<Scalars['String']>;
  team_starts_with_nocase?: InputMaybe<Scalars['String']>;
  team_not_starts_with?: InputMaybe<Scalars['String']>;
  team_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  team_ends_with?: InputMaybe<Scalars['String']>;
  team_ends_with_nocase?: InputMaybe<Scalars['String']>;
  team_not_ends_with?: InputMaybe<Scalars['String']>;
  team_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  team_?: InputMaybe<EoaRecord_filter>;
  milestone?: InputMaybe<Scalars['String']>;
  milestone_not?: InputMaybe<Scalars['String']>;
  milestone_gt?: InputMaybe<Scalars['String']>;
  milestone_lt?: InputMaybe<Scalars['String']>;
  milestone_gte?: InputMaybe<Scalars['String']>;
  milestone_lte?: InputMaybe<Scalars['String']>;
  milestone_in?: InputMaybe<Array<Scalars['String']>>;
  milestone_not_in?: InputMaybe<Array<Scalars['String']>>;
  milestone_contains?: InputMaybe<Scalars['String']>;
  milestone_contains_nocase?: InputMaybe<Scalars['String']>;
  milestone_not_contains?: InputMaybe<Scalars['String']>;
  milestone_not_contains_nocase?: InputMaybe<Scalars['String']>;
  milestone_starts_with?: InputMaybe<Scalars['String']>;
  milestone_starts_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_not_starts_with?: InputMaybe<Scalars['String']>;
  milestone_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_ends_with?: InputMaybe<Scalars['String']>;
  milestone_ends_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_not_ends_with?: InputMaybe<Scalars['String']>;
  milestone_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  milestone_?: InputMaybe<MilestoneRecord_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ProjectSucceededFundraisingEvent_orderBy =
  | 'id'
  | 'txHash'
  | 'timestamp'
  | 'commonGood'
  | 'fundsRaised'
  | 'team'
  | 'milestone';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bundle: ResolverTypeWrapper<Bundle>;
  Bundle_filter: Bundle_filter;
  Bundle_orderBy: Bundle_orderBy;
  Burn: ResolverTypeWrapper<Burn>;
  Burn_filter: Burn_filter;
  Burn_orderBy: Burn_orderBy;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LiquidityPosition: ResolverTypeWrapper<LiquidityPosition>;
  LiquidityPositionSnapshot: ResolverTypeWrapper<LiquidityPositionSnapshot>;
  LiquidityPositionSnapshot_filter: LiquidityPositionSnapshot_filter;
  LiquidityPositionSnapshot_orderBy: LiquidityPositionSnapshot_orderBy;
  LiquidityPosition_filter: LiquidityPosition_filter;
  LiquidityPosition_orderBy: LiquidityPosition_orderBy;
  Mint: ResolverTypeWrapper<Mint>;
  Mint_filter: Mint_filter;
  Mint_orderBy: Mint_orderBy;
  OrderDirection: OrderDirection;
  Pair: ResolverTypeWrapper<Pair>;
  PairDayData: ResolverTypeWrapper<PairDayData>;
  PairDayData_filter: PairDayData_filter;
  PairDayData_orderBy: PairDayData_orderBy;
  PairHourData: ResolverTypeWrapper<PairHourData>;
  PairHourData_filter: PairHourData_filter;
  PairHourData_orderBy: PairHourData_orderBy;
  Pair_filter: Pair_filter;
  Pair_orderBy: Pair_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Swap: ResolverTypeWrapper<Swap>;
  Swap_filter: Swap_filter;
  Swap_orderBy: Swap_orderBy;
  Token: ResolverTypeWrapper<Token>;
  TokenDayData: ResolverTypeWrapper<TokenDayData>;
  TokenDayData_filter: TokenDayData_filter;
  TokenDayData_orderBy: TokenDayData_orderBy;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  Transaction: ResolverTypeWrapper<Transaction>;
  Transaction_filter: Transaction_filter;
  Transaction_orderBy: Transaction_orderBy;
  UniswapDayData: ResolverTypeWrapper<UniswapDayData>;
  UniswapDayData_filter: UniswapDayData_filter;
  UniswapDayData_orderBy: UniswapDayData_orderBy;
  UniswapFactory: ResolverTypeWrapper<UniswapFactory>;
  UniswapFactory_filter: UniswapFactory_filter;
  UniswapFactory_orderBy: UniswapFactory_orderBy;
  User: ResolverTypeWrapper<User>;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  AnnouncementEvent: ResolverTypeWrapper<AnnouncementEvent>;
  AnnouncementEvent_filter: AnnouncementEvent_filter;
  AnnouncementEvent_orderBy: AnnouncementEvent_orderBy;
  CommonGoodCreatedEvent: ResolverTypeWrapper<CommonGoodCreatedEvent>;
  CommonGoodCreatedEvent_filter: CommonGoodCreatedEvent_filter;
  CommonGoodCreatedEvent_orderBy: CommonGoodCreatedEvent_orderBy;
  CommonGoodEventRecord: ResolverTypeWrapper<CommonGoodEventRecord>;
  CommonGoodEventRecord_filter: CommonGoodEventRecord_filter;
  CommonGoodEventRecord_orderBy: CommonGoodEventRecord_orderBy;
  CommonGoodRecord: ResolverTypeWrapper<CommonGoodRecord>;
  CommonGoodRecordState: CommonGoodRecordState;
  CommonGoodRecord_filter: CommonGoodRecord_filter;
  CommonGoodRecord_orderBy: CommonGoodRecord_orderBy;
  EoaEventRecord: ResolverTypeWrapper<EoaEventRecord>;
  EoaEventRecord_filter: EoaEventRecord_filter;
  EoaEventRecord_orderBy: EoaEventRecord_orderBy;
  EoaRecord: ResolverTypeWrapper<EoaRecord>;
  EoaRecord_filter: EoaRecord_filter;
  EoaRecord_orderBy: EoaRecord_orderBy;
  FactoryRecord: ResolverTypeWrapper<FactoryRecord>;
  FactoryRecord_filter: FactoryRecord_filter;
  FactoryRecord_orderBy: FactoryRecord_orderBy;
  FundsClaimedEvent: ResolverTypeWrapper<FundsClaimedEvent>;
  FundsClaimedEvent_filter: FundsClaimedEvent_filter;
  FundsClaimedEvent_orderBy: FundsClaimedEvent_orderBy;
  MetadataUpdatedEvent: ResolverTypeWrapper<MetadataUpdatedEvent>;
  MetadataUpdatedEvent_filter: MetadataUpdatedEvent_filter;
  MetadataUpdatedEvent_orderBy: MetadataUpdatedEvent_orderBy;
  MilestoneRecord: ResolverTypeWrapper<MilestoneRecord>;
  MilestoneRecordStatus: MilestoneRecordStatus;
  MilestoneRecord_filter: MilestoneRecord_filter;
  MilestoneRecord_orderBy: MilestoneRecord_orderBy;
  NextMilestoneStartedEvent: ResolverTypeWrapper<NextMilestoneStartedEvent>;
  NextMilestoneStartedEvent_filter: NextMilestoneStartedEvent_filter;
  NextMilestoneStartedEvent_orderBy: NextMilestoneStartedEvent_orderBy;
  PledgeEvent: ResolverTypeWrapper<PledgeEvent>;
  PledgeEventRecord: ResolverTypeWrapper<PledgeEventRecord>;
  PledgeEventRecord_filter: PledgeEventRecord_filter;
  PledgeEventRecord_orderBy: PledgeEventRecord_orderBy;
  PledgeEvent_filter: PledgeEvent_filter;
  PledgeEvent_orderBy: PledgeEvent_orderBy;
  PledgeRecord: ResolverTypeWrapper<PledgeRecord>;
  PledgeRecord_filter: PledgeRecord_filter;
  PledgeRecord_orderBy: PledgeRecord_orderBy;
  PledgeWithdrawnEvent: ResolverTypeWrapper<PledgeWithdrawnEvent>;
  PledgeWithdrawnEvent_filter: PledgeWithdrawnEvent_filter;
  PledgeWithdrawnEvent_orderBy: PledgeWithdrawnEvent_orderBy;
  ProjectFailedFundraisingEvent: ResolverTypeWrapper<ProjectFailedFundraisingEvent>;
  ProjectFailedFundraisingEvent_filter: ProjectFailedFundraisingEvent_filter;
  ProjectFailedFundraisingEvent_orderBy: ProjectFailedFundraisingEvent_orderBy;
  ProjectSucceededFundraisingEvent: ResolverTypeWrapper<ProjectSucceededFundraisingEvent>;
  ProjectSucceededFundraisingEvent_filter: ProjectSucceededFundraisingEvent_filter;
  ProjectSucceededFundraisingEvent_orderBy: ProjectSucceededFundraisingEvent_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bundle: Bundle;
  Bundle_filter: Bundle_filter;
  Burn: Burn;
  Burn_filter: Burn_filter;
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  LiquidityPosition: LiquidityPosition;
  LiquidityPositionSnapshot: LiquidityPositionSnapshot;
  LiquidityPositionSnapshot_filter: LiquidityPositionSnapshot_filter;
  LiquidityPosition_filter: LiquidityPosition_filter;
  Mint: Mint;
  Mint_filter: Mint_filter;
  Pair: Pair;
  PairDayData: PairDayData;
  PairDayData_filter: PairDayData_filter;
  PairHourData: PairHourData;
  PairHourData_filter: PairHourData_filter;
  Pair_filter: Pair_filter;
  String: Scalars['String'];
  Swap: Swap;
  Swap_filter: Swap_filter;
  Token: Token;
  TokenDayData: TokenDayData;
  TokenDayData_filter: TokenDayData_filter;
  Token_filter: Token_filter;
  Transaction: Transaction;
  Transaction_filter: Transaction_filter;
  UniswapDayData: UniswapDayData;
  UniswapDayData_filter: UniswapDayData_filter;
  UniswapFactory: UniswapFactory;
  UniswapFactory_filter: UniswapFactory_filter;
  User: User;
  User_filter: User_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
  AnnouncementEvent: AnnouncementEvent;
  AnnouncementEvent_filter: AnnouncementEvent_filter;
  CommonGoodCreatedEvent: CommonGoodCreatedEvent;
  CommonGoodCreatedEvent_filter: CommonGoodCreatedEvent_filter;
  CommonGoodEventRecord: CommonGoodEventRecord;
  CommonGoodEventRecord_filter: CommonGoodEventRecord_filter;
  CommonGoodRecord: CommonGoodRecord;
  CommonGoodRecord_filter: CommonGoodRecord_filter;
  EoaEventRecord: EoaEventRecord;
  EoaEventRecord_filter: EoaEventRecord_filter;
  EoaRecord: EoaRecord;
  EoaRecord_filter: EoaRecord_filter;
  FactoryRecord: FactoryRecord;
  FactoryRecord_filter: FactoryRecord_filter;
  FundsClaimedEvent: FundsClaimedEvent;
  FundsClaimedEvent_filter: FundsClaimedEvent_filter;
  MetadataUpdatedEvent: MetadataUpdatedEvent;
  MetadataUpdatedEvent_filter: MetadataUpdatedEvent_filter;
  MilestoneRecord: MilestoneRecord;
  MilestoneRecord_filter: MilestoneRecord_filter;
  NextMilestoneStartedEvent: NextMilestoneStartedEvent;
  NextMilestoneStartedEvent_filter: NextMilestoneStartedEvent_filter;
  PledgeEvent: PledgeEvent;
  PledgeEventRecord: PledgeEventRecord;
  PledgeEventRecord_filter: PledgeEventRecord_filter;
  PledgeEvent_filter: PledgeEvent_filter;
  PledgeRecord: PledgeRecord;
  PledgeRecord_filter: PledgeRecord_filter;
  PledgeWithdrawnEvent: PledgeWithdrawnEvent;
  PledgeWithdrawnEvent_filter: PledgeWithdrawnEvent_filter;
  ProjectFailedFundraisingEvent: ProjectFailedFundraisingEvent;
  ProjectFailedFundraisingEvent_filter: ProjectFailedFundraisingEvent_filter;
  ProjectSucceededFundraisingEvent: ProjectSucceededFundraisingEvent;
  ProjectSucceededFundraisingEvent_filter: ProjectSucceededFundraisingEvent_filter;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  uniswapFactory?: Resolver<Maybe<ResolversTypes['UniswapFactory']>, ParentType, ContextType, RequireFields<QueryuniswapFactoryArgs, 'id' | 'subgraphError'>>;
  uniswapFactories?: Resolver<Array<ResolversTypes['UniswapFactory']>, ParentType, ContextType, RequireFields<QueryuniswapFactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  pair?: Resolver<Maybe<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<QuerypairArgs, 'id' | 'subgraphError'>>;
  pairs?: Resolver<Array<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<QuerypairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPosition?: Resolver<Maybe<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<QueryliquidityPositionArgs, 'id' | 'subgraphError'>>;
  liquidityPositions?: Resolver<Array<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<QueryliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPositionSnapshot?: Resolver<Maybe<ResolversTypes['LiquidityPositionSnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPositionSnapshotArgs, 'id' | 'subgraphError'>>;
  liquidityPositionSnapshots?: Resolver<Array<ResolversTypes['LiquidityPositionSnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mint?: Resolver<Maybe<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<QuerymintArgs, 'id' | 'subgraphError'>>;
  mints?: Resolver<Array<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<QuerymintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  burn?: Resolver<Maybe<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<QueryburnArgs, 'id' | 'subgraphError'>>;
  burns?: Resolver<Array<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<QueryburnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: Resolver<Maybe<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapArgs, 'id' | 'subgraphError'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bundle?: Resolver<Maybe<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<QuerybundleArgs, 'id' | 'subgraphError'>>;
  bundles?: Resolver<Array<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<QuerybundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniswapDayData?: Resolver<Maybe<ResolversTypes['UniswapDayData']>, ParentType, ContextType, RequireFields<QueryuniswapDayDataArgs, 'id' | 'subgraphError'>>;
  uniswapDayDatas?: Resolver<Array<ResolversTypes['UniswapDayData']>, ParentType, ContextType, RequireFields<QueryuniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairHourData?: Resolver<Maybe<ResolversTypes['PairHourData']>, ParentType, ContextType, RequireFields<QuerypairHourDataArgs, 'id' | 'subgraphError'>>;
  pairHourDatas?: Resolver<Array<ResolversTypes['PairHourData']>, ParentType, ContextType, RequireFields<QuerypairHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairDayData?: Resolver<Maybe<ResolversTypes['PairDayData']>, ParentType, ContextType, RequireFields<QuerypairDayDataArgs, 'id' | 'subgraphError'>>;
  pairDayDatas?: Resolver<Array<ResolversTypes['PairDayData']>, ParentType, ContextType, RequireFields<QuerypairDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenDayData?: Resolver<Maybe<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<QuerytokenDayDataArgs, 'id' | 'subgraphError'>>;
  tokenDayDatas?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<QuerytokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  factoryRecord?: Resolver<Maybe<ResolversTypes['FactoryRecord']>, ParentType, ContextType, RequireFields<QueryfactoryRecordArgs, 'id' | 'subgraphError'>>;
  factoryRecords?: Resolver<Array<ResolversTypes['FactoryRecord']>, ParentType, ContextType, RequireFields<QueryfactoryRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  commonGoodCreatedEvent?: Resolver<Maybe<ResolversTypes['CommonGoodCreatedEvent']>, ParentType, ContextType, RequireFields<QuerycommonGoodCreatedEventArgs, 'id' | 'subgraphError'>>;
  commonGoodCreatedEvents?: Resolver<Array<ResolversTypes['CommonGoodCreatedEvent']>, ParentType, ContextType, RequireFields<QuerycommonGoodCreatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pledgeEvent?: Resolver<Maybe<ResolversTypes['PledgeEvent']>, ParentType, ContextType, RequireFields<QuerypledgeEventArgs, 'id' | 'subgraphError'>>;
  pledgeEvents?: Resolver<Array<ResolversTypes['PledgeEvent']>, ParentType, ContextType, RequireFields<QuerypledgeEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pledgeWithdrawnEvent?: Resolver<Maybe<ResolversTypes['PledgeWithdrawnEvent']>, ParentType, ContextType, RequireFields<QuerypledgeWithdrawnEventArgs, 'id' | 'subgraphError'>>;
  pledgeWithdrawnEvents?: Resolver<Array<ResolversTypes['PledgeWithdrawnEvent']>, ParentType, ContextType, RequireFields<QuerypledgeWithdrawnEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  metadataUpdatedEvent?: Resolver<Maybe<ResolversTypes['MetadataUpdatedEvent']>, ParentType, ContextType, RequireFields<QuerymetadataUpdatedEventArgs, 'id' | 'subgraphError'>>;
  metadataUpdatedEvents?: Resolver<Array<ResolversTypes['MetadataUpdatedEvent']>, ParentType, ContextType, RequireFields<QuerymetadataUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  announcementEvent?: Resolver<Maybe<ResolversTypes['AnnouncementEvent']>, ParentType, ContextType, RequireFields<QueryannouncementEventArgs, 'id' | 'subgraphError'>>;
  announcementEvents?: Resolver<Array<ResolversTypes['AnnouncementEvent']>, ParentType, ContextType, RequireFields<QueryannouncementEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nextMilestoneStartedEvent?: Resolver<Maybe<ResolversTypes['NextMilestoneStartedEvent']>, ParentType, ContextType, RequireFields<QuerynextMilestoneStartedEventArgs, 'id' | 'subgraphError'>>;
  nextMilestoneStartedEvents?: Resolver<Array<ResolversTypes['NextMilestoneStartedEvent']>, ParentType, ContextType, RequireFields<QuerynextMilestoneStartedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  projectSucceededFundraisingEvent?: Resolver<Maybe<ResolversTypes['ProjectSucceededFundraisingEvent']>, ParentType, ContextType, RequireFields<QueryprojectSucceededFundraisingEventArgs, 'id' | 'subgraphError'>>;
  projectSucceededFundraisingEvents?: Resolver<Array<ResolversTypes['ProjectSucceededFundraisingEvent']>, ParentType, ContextType, RequireFields<QueryprojectSucceededFundraisingEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  projectFailedFundraisingEvent?: Resolver<Maybe<ResolversTypes['ProjectFailedFundraisingEvent']>, ParentType, ContextType, RequireFields<QueryprojectFailedFundraisingEventArgs, 'id' | 'subgraphError'>>;
  projectFailedFundraisingEvents?: Resolver<Array<ResolversTypes['ProjectFailedFundraisingEvent']>, ParentType, ContextType, RequireFields<QueryprojectFailedFundraisingEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fundsClaimedEvent?: Resolver<Maybe<ResolversTypes['FundsClaimedEvent']>, ParentType, ContextType, RequireFields<QueryfundsClaimedEventArgs, 'id' | 'subgraphError'>>;
  fundsClaimedEvents?: Resolver<Array<ResolversTypes['FundsClaimedEvent']>, ParentType, ContextType, RequireFields<QueryfundsClaimedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  commonGoodEventRecord?: Resolver<Maybe<ResolversTypes['CommonGoodEventRecord']>, ParentType, ContextType, RequireFields<QuerycommonGoodEventRecordArgs, 'id' | 'subgraphError'>>;
  commonGoodEventRecords?: Resolver<Array<ResolversTypes['CommonGoodEventRecord']>, ParentType, ContextType, RequireFields<QuerycommonGoodEventRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  milestoneRecord?: Resolver<Maybe<ResolversTypes['MilestoneRecord']>, ParentType, ContextType, RequireFields<QuerymilestoneRecordArgs, 'id' | 'subgraphError'>>;
  milestoneRecords?: Resolver<Array<ResolversTypes['MilestoneRecord']>, ParentType, ContextType, RequireFields<QuerymilestoneRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  commonGoodRecord?: Resolver<Maybe<ResolversTypes['CommonGoodRecord']>, ParentType, ContextType, RequireFields<QuerycommonGoodRecordArgs, 'id' | 'subgraphError'>>;
  commonGoodRecords?: Resolver<Array<ResolversTypes['CommonGoodRecord']>, ParentType, ContextType, RequireFields<QuerycommonGoodRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pledgeEventRecord?: Resolver<Maybe<ResolversTypes['PledgeEventRecord']>, ParentType, ContextType, RequireFields<QuerypledgeEventRecordArgs, 'id' | 'subgraphError'>>;
  pledgeEventRecords?: Resolver<Array<ResolversTypes['PledgeEventRecord']>, ParentType, ContextType, RequireFields<QuerypledgeEventRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pledgeRecord?: Resolver<Maybe<ResolversTypes['PledgeRecord']>, ParentType, ContextType, RequireFields<QuerypledgeRecordArgs, 'id' | 'subgraphError'>>;
  pledgeRecords?: Resolver<Array<ResolversTypes['PledgeRecord']>, ParentType, ContextType, RequireFields<QuerypledgeRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  eoaEventRecord?: Resolver<Maybe<ResolversTypes['EoaEventRecord']>, ParentType, ContextType, RequireFields<QueryeoaEventRecordArgs, 'id' | 'subgraphError'>>;
  eoaEventRecords?: Resolver<Array<ResolversTypes['EoaEventRecord']>, ParentType, ContextType, RequireFields<QueryeoaEventRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  eoaRecord?: Resolver<Maybe<ResolversTypes['EoaRecord']>, ParentType, ContextType, RequireFields<QueryeoaRecordArgs, 'id' | 'subgraphError'>>;
  eoaRecords?: Resolver<Array<ResolversTypes['EoaRecord']>, ParentType, ContextType, RequireFields<QueryeoaRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  uniswapFactory?: SubscriptionResolver<Maybe<ResolversTypes['UniswapFactory']>, "uniswapFactory", ParentType, ContextType, RequireFields<SubscriptionuniswapFactoryArgs, 'id' | 'subgraphError'>>;
  uniswapFactories?: SubscriptionResolver<Array<ResolversTypes['UniswapFactory']>, "uniswapFactories", ParentType, ContextType, RequireFields<SubscriptionuniswapFactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  pair?: SubscriptionResolver<Maybe<ResolversTypes['Pair']>, "pair", ParentType, ContextType, RequireFields<SubscriptionpairArgs, 'id' | 'subgraphError'>>;
  pairs?: SubscriptionResolver<Array<ResolversTypes['Pair']>, "pairs", ParentType, ContextType, RequireFields<SubscriptionpairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPosition?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPosition']>, "liquidityPosition", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionArgs, 'id' | 'subgraphError'>>;
  liquidityPositions?: SubscriptionResolver<Array<ResolversTypes['LiquidityPosition']>, "liquidityPositions", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPositionSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPositionSnapshot']>, "liquidityPositionSnapshot", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionSnapshotArgs, 'id' | 'subgraphError'>>;
  liquidityPositionSnapshots?: SubscriptionResolver<Array<ResolversTypes['LiquidityPositionSnapshot']>, "liquidityPositionSnapshots", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptiontransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptiontransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mint?: SubscriptionResolver<Maybe<ResolversTypes['Mint']>, "mint", ParentType, ContextType, RequireFields<SubscriptionmintArgs, 'id' | 'subgraphError'>>;
  mints?: SubscriptionResolver<Array<ResolversTypes['Mint']>, "mints", ParentType, ContextType, RequireFields<SubscriptionmintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  burn?: SubscriptionResolver<Maybe<ResolversTypes['Burn']>, "burn", ParentType, ContextType, RequireFields<SubscriptionburnArgs, 'id' | 'subgraphError'>>;
  burns?: SubscriptionResolver<Array<ResolversTypes['Burn']>, "burns", ParentType, ContextType, RequireFields<SubscriptionburnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: SubscriptionResolver<Maybe<ResolversTypes['Swap']>, "swap", ParentType, ContextType, RequireFields<SubscriptionswapArgs, 'id' | 'subgraphError'>>;
  swaps?: SubscriptionResolver<Array<ResolversTypes['Swap']>, "swaps", ParentType, ContextType, RequireFields<SubscriptionswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bundle?: SubscriptionResolver<Maybe<ResolversTypes['Bundle']>, "bundle", ParentType, ContextType, RequireFields<SubscriptionbundleArgs, 'id' | 'subgraphError'>>;
  bundles?: SubscriptionResolver<Array<ResolversTypes['Bundle']>, "bundles", ParentType, ContextType, RequireFields<SubscriptionbundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniswapDayData?: SubscriptionResolver<Maybe<ResolversTypes['UniswapDayData']>, "uniswapDayData", ParentType, ContextType, RequireFields<SubscriptionuniswapDayDataArgs, 'id' | 'subgraphError'>>;
  uniswapDayDatas?: SubscriptionResolver<Array<ResolversTypes['UniswapDayData']>, "uniswapDayDatas", ParentType, ContextType, RequireFields<SubscriptionuniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairHourData?: SubscriptionResolver<Maybe<ResolversTypes['PairHourData']>, "pairHourData", ParentType, ContextType, RequireFields<SubscriptionpairHourDataArgs, 'id' | 'subgraphError'>>;
  pairHourDatas?: SubscriptionResolver<Array<ResolversTypes['PairHourData']>, "pairHourDatas", ParentType, ContextType, RequireFields<SubscriptionpairHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairDayData?: SubscriptionResolver<Maybe<ResolversTypes['PairDayData']>, "pairDayData", ParentType, ContextType, RequireFields<SubscriptionpairDayDataArgs, 'id' | 'subgraphError'>>;
  pairDayDatas?: SubscriptionResolver<Array<ResolversTypes['PairDayData']>, "pairDayDatas", ParentType, ContextType, RequireFields<SubscriptionpairDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenDayData?: SubscriptionResolver<Maybe<ResolversTypes['TokenDayData']>, "tokenDayData", ParentType, ContextType, RequireFields<SubscriptiontokenDayDataArgs, 'id' | 'subgraphError'>>;
  tokenDayDatas?: SubscriptionResolver<Array<ResolversTypes['TokenDayData']>, "tokenDayDatas", ParentType, ContextType, RequireFields<SubscriptiontokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  factoryRecord?: SubscriptionResolver<Maybe<ResolversTypes['FactoryRecord']>, "factoryRecord", ParentType, ContextType, RequireFields<SubscriptionfactoryRecordArgs, 'id' | 'subgraphError'>>;
  factoryRecords?: SubscriptionResolver<Array<ResolversTypes['FactoryRecord']>, "factoryRecords", ParentType, ContextType, RequireFields<SubscriptionfactoryRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  commonGoodCreatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['CommonGoodCreatedEvent']>, "commonGoodCreatedEvent", ParentType, ContextType, RequireFields<SubscriptioncommonGoodCreatedEventArgs, 'id' | 'subgraphError'>>;
  commonGoodCreatedEvents?: SubscriptionResolver<Array<ResolversTypes['CommonGoodCreatedEvent']>, "commonGoodCreatedEvents", ParentType, ContextType, RequireFields<SubscriptioncommonGoodCreatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pledgeEvent?: SubscriptionResolver<Maybe<ResolversTypes['PledgeEvent']>, "pledgeEvent", ParentType, ContextType, RequireFields<SubscriptionpledgeEventArgs, 'id' | 'subgraphError'>>;
  pledgeEvents?: SubscriptionResolver<Array<ResolversTypes['PledgeEvent']>, "pledgeEvents", ParentType, ContextType, RequireFields<SubscriptionpledgeEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pledgeWithdrawnEvent?: SubscriptionResolver<Maybe<ResolversTypes['PledgeWithdrawnEvent']>, "pledgeWithdrawnEvent", ParentType, ContextType, RequireFields<SubscriptionpledgeWithdrawnEventArgs, 'id' | 'subgraphError'>>;
  pledgeWithdrawnEvents?: SubscriptionResolver<Array<ResolversTypes['PledgeWithdrawnEvent']>, "pledgeWithdrawnEvents", ParentType, ContextType, RequireFields<SubscriptionpledgeWithdrawnEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  metadataUpdatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['MetadataUpdatedEvent']>, "metadataUpdatedEvent", ParentType, ContextType, RequireFields<SubscriptionmetadataUpdatedEventArgs, 'id' | 'subgraphError'>>;
  metadataUpdatedEvents?: SubscriptionResolver<Array<ResolversTypes['MetadataUpdatedEvent']>, "metadataUpdatedEvents", ParentType, ContextType, RequireFields<SubscriptionmetadataUpdatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  announcementEvent?: SubscriptionResolver<Maybe<ResolversTypes['AnnouncementEvent']>, "announcementEvent", ParentType, ContextType, RequireFields<SubscriptionannouncementEventArgs, 'id' | 'subgraphError'>>;
  announcementEvents?: SubscriptionResolver<Array<ResolversTypes['AnnouncementEvent']>, "announcementEvents", ParentType, ContextType, RequireFields<SubscriptionannouncementEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nextMilestoneStartedEvent?: SubscriptionResolver<Maybe<ResolversTypes['NextMilestoneStartedEvent']>, "nextMilestoneStartedEvent", ParentType, ContextType, RequireFields<SubscriptionnextMilestoneStartedEventArgs, 'id' | 'subgraphError'>>;
  nextMilestoneStartedEvents?: SubscriptionResolver<Array<ResolversTypes['NextMilestoneStartedEvent']>, "nextMilestoneStartedEvents", ParentType, ContextType, RequireFields<SubscriptionnextMilestoneStartedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  projectSucceededFundraisingEvent?: SubscriptionResolver<Maybe<ResolversTypes['ProjectSucceededFundraisingEvent']>, "projectSucceededFundraisingEvent", ParentType, ContextType, RequireFields<SubscriptionprojectSucceededFundraisingEventArgs, 'id' | 'subgraphError'>>;
  projectSucceededFundraisingEvents?: SubscriptionResolver<Array<ResolversTypes['ProjectSucceededFundraisingEvent']>, "projectSucceededFundraisingEvents", ParentType, ContextType, RequireFields<SubscriptionprojectSucceededFundraisingEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  projectFailedFundraisingEvent?: SubscriptionResolver<Maybe<ResolversTypes['ProjectFailedFundraisingEvent']>, "projectFailedFundraisingEvent", ParentType, ContextType, RequireFields<SubscriptionprojectFailedFundraisingEventArgs, 'id' | 'subgraphError'>>;
  projectFailedFundraisingEvents?: SubscriptionResolver<Array<ResolversTypes['ProjectFailedFundraisingEvent']>, "projectFailedFundraisingEvents", ParentType, ContextType, RequireFields<SubscriptionprojectFailedFundraisingEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fundsClaimedEvent?: SubscriptionResolver<Maybe<ResolversTypes['FundsClaimedEvent']>, "fundsClaimedEvent", ParentType, ContextType, RequireFields<SubscriptionfundsClaimedEventArgs, 'id' | 'subgraphError'>>;
  fundsClaimedEvents?: SubscriptionResolver<Array<ResolversTypes['FundsClaimedEvent']>, "fundsClaimedEvents", ParentType, ContextType, RequireFields<SubscriptionfundsClaimedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  commonGoodEventRecord?: SubscriptionResolver<Maybe<ResolversTypes['CommonGoodEventRecord']>, "commonGoodEventRecord", ParentType, ContextType, RequireFields<SubscriptioncommonGoodEventRecordArgs, 'id' | 'subgraphError'>>;
  commonGoodEventRecords?: SubscriptionResolver<Array<ResolversTypes['CommonGoodEventRecord']>, "commonGoodEventRecords", ParentType, ContextType, RequireFields<SubscriptioncommonGoodEventRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  milestoneRecord?: SubscriptionResolver<Maybe<ResolversTypes['MilestoneRecord']>, "milestoneRecord", ParentType, ContextType, RequireFields<SubscriptionmilestoneRecordArgs, 'id' | 'subgraphError'>>;
  milestoneRecords?: SubscriptionResolver<Array<ResolversTypes['MilestoneRecord']>, "milestoneRecords", ParentType, ContextType, RequireFields<SubscriptionmilestoneRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  commonGoodRecord?: SubscriptionResolver<Maybe<ResolversTypes['CommonGoodRecord']>, "commonGoodRecord", ParentType, ContextType, RequireFields<SubscriptioncommonGoodRecordArgs, 'id' | 'subgraphError'>>;
  commonGoodRecords?: SubscriptionResolver<Array<ResolversTypes['CommonGoodRecord']>, "commonGoodRecords", ParentType, ContextType, RequireFields<SubscriptioncommonGoodRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pledgeEventRecord?: SubscriptionResolver<Maybe<ResolversTypes['PledgeEventRecord']>, "pledgeEventRecord", ParentType, ContextType, RequireFields<SubscriptionpledgeEventRecordArgs, 'id' | 'subgraphError'>>;
  pledgeEventRecords?: SubscriptionResolver<Array<ResolversTypes['PledgeEventRecord']>, "pledgeEventRecords", ParentType, ContextType, RequireFields<SubscriptionpledgeEventRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pledgeRecord?: SubscriptionResolver<Maybe<ResolversTypes['PledgeRecord']>, "pledgeRecord", ParentType, ContextType, RequireFields<SubscriptionpledgeRecordArgs, 'id' | 'subgraphError'>>;
  pledgeRecords?: SubscriptionResolver<Array<ResolversTypes['PledgeRecord']>, "pledgeRecords", ParentType, ContextType, RequireFields<SubscriptionpledgeRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  eoaEventRecord?: SubscriptionResolver<Maybe<ResolversTypes['EoaEventRecord']>, "eoaEventRecord", ParentType, ContextType, RequireFields<SubscriptioneoaEventRecordArgs, 'id' | 'subgraphError'>>;
  eoaEventRecords?: SubscriptionResolver<Array<ResolversTypes['EoaEventRecord']>, "eoaEventRecords", ParentType, ContextType, RequireFields<SubscriptioneoaEventRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  eoaRecord?: SubscriptionResolver<Maybe<ResolversTypes['EoaRecord']>, "eoaRecord", ParentType, ContextType, RequireFields<SubscriptioneoaRecordArgs, 'id' | 'subgraphError'>>;
  eoaRecords?: SubscriptionResolver<Array<ResolversTypes['EoaRecord']>, "eoaRecords", ParentType, ContextType, RequireFields<SubscriptioneoaRecordsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BundleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Bundle'] = ResolversParentTypes['Bundle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ethPrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BurnResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Burn'] = ResolversParentTypes['Burn']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  amount0?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  amount1?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  needsComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  feeTo?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  feeLiquidity?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type LiquidityPositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPosition'] = ResolversParentTypes['LiquidityPosition']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  liquidityTokenBalance?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidityPositionSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPositionSnapshot'] = ResolversParentTypes['LiquidityPositionSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidityPosition?: Resolver<ResolversTypes['LiquidityPosition'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  token0PriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1PriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityTokenTotalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityTokenBalance?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MintResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mint'] = ResolversParentTypes['Mint']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  amount0?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  amount1?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  feeTo?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  feeLiquidity?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pair'] = ResolversParentTypes['Pair']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  trackedReserveETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityProviderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PairDayData'] = ResolversParentTypes['PairDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pairAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTxns?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairHourDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PairHourData'] = ResolversParentTypes['PairHourData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hourStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyVolumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyVolumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyTxns?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount0In?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1In?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount0Out?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1Out?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tradeVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tradeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLiquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  derivedETH?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  mostLiquidPairs?: Resolver<Array<Maybe<ResolversTypes['PairDayData']>>, ParentType, ContextType, RequireFields<TokenmostLiquidPairsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenDayData'] = ResolversParentTypes['TokenDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  dailyVolumeToken?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTxns?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLiquidityToken?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  priceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  maxStored?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mostLiquidPairs?: Resolver<Array<ResolversTypes['PairDayData']>, ParentType, ContextType, RequireFields<TokenDayDatamostLiquidPairsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  mints?: Resolver<Array<Maybe<ResolversTypes['Mint']>>, ParentType, ContextType, RequireFields<TransactionmintsArgs, 'skip' | 'first'>>;
  burns?: Resolver<Array<Maybe<ResolversTypes['Burn']>>, ParentType, ContextType, RequireFields<TransactionburnsArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Array<Maybe<ResolversTypes['Swap']>>, ParentType, ContextType, RequireFields<TransactionswapsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UniswapDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniswapDayData'] = ResolversParentTypes['UniswapDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  maxStored?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mostLiquidTokens?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<UniswapDayDatamostLiquidTokensArgs, 'skip' | 'first'>>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UniswapFactoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniswapFactory'] = ResolversParentTypes['UniswapFactory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pairCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  mostLiquidTokens?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<UniswapFactorymostLiquidTokensArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidityPositions?: Resolver<Maybe<Array<ResolversTypes['LiquidityPosition']>>, ParentType, ContextType, RequireFields<UserliquidityPositionsArgs, 'skip' | 'first'>>;
  usdSwapped?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnnouncementEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AnnouncementEvent'] = ResolversParentTypes['AnnouncementEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  CID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  by?: Resolver<ResolversTypes['EoaRecord'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommonGoodCreatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CommonGoodCreatedEvent'] = ResolversParentTypes['CommonGoodCreatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  factory?: Resolver<ResolversTypes['FactoryRecord'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  CID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  contents?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  by?: Resolver<ResolversTypes['EoaRecord'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommonGoodEventRecordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CommonGoodEventRecord'] = ResolversParentTypes['CommonGoodEventRecord']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['CommonGoodCreatedEvent']>, ParentType, ContextType>;
  pledged?: Resolver<Maybe<ResolversTypes['PledgeEvent']>, ParentType, ContextType>;
  withdrew?: Resolver<Maybe<ResolversTypes['PledgeWithdrawnEvent']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['NextMilestoneStartedEvent']>, ParentType, ContextType>;
  succeeded?: Resolver<Maybe<ResolversTypes['ProjectSucceededFundraisingEvent']>, ParentType, ContextType>;
  failed?: Resolver<Maybe<ResolversTypes['ProjectFailedFundraisingEvent']>, ParentType, ContextType>;
  claimed?: Resolver<Maybe<ResolversTypes['FundsClaimedEvent']>, ParentType, ContextType>;
  announcement?: Resolver<Maybe<ResolversTypes['AnnouncementEvent']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['MetadataUpdatedEvent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommonGoodRecordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CommonGoodRecord'] = ResolversParentTypes['CommonGoodRecord']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  initializerAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  adminAddresses?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  teamAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  metadataCID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  metadataContents?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  factory?: Resolver<ResolversTypes['FactoryRecord'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdateTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['CommonGoodRecordState'], ParentType, ContextType>;
  currentMilestoneStartDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastMilestoneEndDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  raisedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  withdrawnAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  claimedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  milestones?: Resolver<Array<ResolversTypes['MilestoneRecord']>, ParentType, ContextType, RequireFields<CommonGoodRecordmilestonesArgs, 'skip' | 'first'>>;
  pledges?: Resolver<Array<ResolversTypes['PledgeRecord']>, ParentType, ContextType, RequireFields<CommonGoodRecordpledgesArgs, 'skip' | 'first'>>;
  pledgerCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  withdrawnPledgerCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdEvent?: Resolver<ResolversTypes['CommonGoodCreatedEvent'], ParentType, ContextType>;
  pledgeWithdrawEvents?: Resolver<Array<ResolversTypes['PledgeWithdrawnEvent']>, ParentType, ContextType, RequireFields<CommonGoodRecordpledgeWithdrawEventsArgs, 'skip' | 'first'>>;
  pledgeEvents?: Resolver<Array<ResolversTypes['PledgeEvent']>, ParentType, ContextType, RequireFields<CommonGoodRecordpledgeEventsArgs, 'skip' | 'first'>>;
  nextEvents?: Resolver<Array<ResolversTypes['NextMilestoneStartedEvent']>, ParentType, ContextType, RequireFields<CommonGoodRecordnextEventsArgs, 'skip' | 'first'>>;
  succeeded?: Resolver<Maybe<ResolversTypes['ProjectSucceededFundraisingEvent']>, ParentType, ContextType>;
  failed?: Resolver<Maybe<ResolversTypes['ProjectFailedFundraisingEvent']>, ParentType, ContextType>;
  claimedEvents?: Resolver<Array<ResolversTypes['FundsClaimedEvent']>, ParentType, ContextType, RequireFields<CommonGoodRecordclaimedEventsArgs, 'skip' | 'first'>>;
  events?: Resolver<Array<ResolversTypes['CommonGoodEventRecord']>, ParentType, ContextType, RequireFields<CommonGoodRecordeventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EoaEventRecordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EoaEventRecord'] = ResolversParentTypes['EoaEventRecord']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  by?: Resolver<ResolversTypes['EoaRecord'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['CommonGoodCreatedEvent']>, ParentType, ContextType>;
  pledged?: Resolver<Maybe<ResolversTypes['PledgeEvent']>, ParentType, ContextType>;
  withdrew?: Resolver<Maybe<ResolversTypes['PledgeWithdrawnEvent']>, ParentType, ContextType>;
  claimed?: Resolver<Maybe<ResolversTypes['FundsClaimedEvent']>, ParentType, ContextType>;
  teamSucceededFundraising?: Resolver<Maybe<ResolversTypes['ProjectSucceededFundraisingEvent']>, ParentType, ContextType>;
  teamMissedFundraising?: Resolver<Maybe<ResolversTypes['ProjectFailedFundraisingEvent']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['MetadataUpdatedEvent']>, ParentType, ContextType>;
  announced?: Resolver<Maybe<ResolversTypes['AnnouncementEvent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EoaRecordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EoaRecord'] = ResolversParentTypes['EoaRecord']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pledgeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  withdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pledgeBestowed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pledgeWithdrew?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  claimedTotal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pledgedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  withdrewCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  claimedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamFailedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamSucceededCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  announcementCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pledges?: Resolver<Array<ResolversTypes['PledgeRecord']>, ParentType, ContextType, RequireFields<EoaRecordpledgesArgs, 'skip' | 'first'>>;
  createdEvents?: Resolver<Array<ResolversTypes['CommonGoodCreatedEvent']>, ParentType, ContextType, RequireFields<EoaRecordcreatedEventsArgs, 'skip' | 'first'>>;
  pledgedEvents?: Resolver<Array<ResolversTypes['PledgeEvent']>, ParentType, ContextType, RequireFields<EoaRecordpledgedEventsArgs, 'skip' | 'first'>>;
  withdrewEvents?: Resolver<Array<ResolversTypes['PledgeWithdrawnEvent']>, ParentType, ContextType, RequireFields<EoaRecordwithdrewEventsArgs, 'skip' | 'first'>>;
  claimedEvents?: Resolver<Array<ResolversTypes['FundsClaimedEvent']>, ParentType, ContextType, RequireFields<EoaRecordclaimedEventsArgs, 'skip' | 'first'>>;
  teamFailedEvents?: Resolver<Array<ResolversTypes['ProjectFailedFundraisingEvent']>, ParentType, ContextType, RequireFields<EoaRecordteamFailedEventsArgs, 'skip' | 'first'>>;
  teamSucceededEvents?: Resolver<Array<ResolversTypes['ProjectSucceededFundraisingEvent']>, ParentType, ContextType, RequireFields<EoaRecordteamSucceededEventsArgs, 'skip' | 'first'>>;
  updatesEvents?: Resolver<Array<ResolversTypes['MetadataUpdatedEvent']>, ParentType, ContextType, RequireFields<EoaRecordupdatesEventsArgs, 'skip' | 'first'>>;
  announcementEvents?: Resolver<Maybe<ResolversTypes['AnnouncementEvent']>, ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['EoaEventRecord']>, ParentType, ContextType, RequireFields<EoaRecordeventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FactoryRecordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FactoryRecord'] = ResolversParentTypes['FactoryRecord']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGoods?: Resolver<Array<ResolversTypes['CommonGoodRecord']>, ParentType, ContextType, RequireFields<FactoryRecordcommonGoodsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FundsClaimedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FundsClaimedEvent'] = ResolversParentTypes['FundsClaimedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  by?: Resolver<ResolversTypes['EoaRecord'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetadataUpdatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetadataUpdatedEvent'] = ResolversParentTypes['MetadataUpdatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  CID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  contents?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  by?: Resolver<ResolversTypes['EoaRecord'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MilestoneRecordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MilestoneRecord'] = ResolversParentTypes['MilestoneRecord']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  minRaisedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fundReleaseAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  CID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['MilestoneRecordStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NextMilestoneStartedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NextMilestoneStartedEvent'] = ResolversParentTypes['NextMilestoneStartedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  current?: Resolver<ResolversTypes['MilestoneRecord'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PledgeEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PledgeEvent'] = ResolversParentTypes['PledgeEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  pledge?: Resolver<ResolversTypes['PledgeRecord'], ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  by?: Resolver<ResolversTypes['EoaRecord'], ParentType, ContextType>;
  pledgeBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pledgeRaised?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pledgeWithdrawnAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pledgePledges?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pledgeWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  commonGoodRaised?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGoodBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGoodWithdrawnAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGoodPledgerCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PledgeEventRecordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PledgeEventRecord'] = ResolversParentTypes['PledgeEventRecord']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pledge?: Resolver<ResolversTypes['PledgeRecord'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  pledged?: Resolver<Maybe<ResolversTypes['PledgeEvent']>, ParentType, ContextType>;
  withdrew?: Resolver<Maybe<ResolversTypes['PledgeWithdrawnEvent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PledgeRecordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PledgeRecord'] = ResolversParentTypes['PledgeRecord']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  by?: Resolver<ResolversTypes['EoaRecord'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  raised?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  withdrawnAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pledges?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  withdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  withdrawn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pledgeEvents?: Resolver<Array<ResolversTypes['PledgeEvent']>, ParentType, ContextType, RequireFields<PledgeRecordpledgeEventsArgs, 'skip' | 'first'>>;
  withdrawEvent?: Resolver<Array<ResolversTypes['PledgeWithdrawnEvent']>, ParentType, ContextType, RequireFields<PledgeRecordwithdrawEventArgs, 'skip' | 'first'>>;
  events?: Resolver<Array<ResolversTypes['PledgeEventRecord']>, ParentType, ContextType, RequireFields<PledgeRecordeventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PledgeWithdrawnEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PledgeWithdrawnEvent'] = ResolversParentTypes['PledgeWithdrawnEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  pledge?: Resolver<ResolversTypes['PledgeRecord'], ParentType, ContextType>;
  amountWithdrawn?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  by?: Resolver<ResolversTypes['EoaRecord'], ParentType, ContextType>;
  pledgeBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pledgeRaised?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pledgeWithdrawnAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pledgePledges?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pledgeWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  commonGoodRaised?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGoodBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGoodWithdrawnAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGoodPledgerCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectFailedFundraisingEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProjectFailedFundraisingEvent'] = ResolversParentTypes['ProjectFailedFundraisingEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  fundsRaised?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  team?: Resolver<ResolversTypes['EoaRecord'], ParentType, ContextType>;
  milestone?: Resolver<ResolversTypes['MilestoneRecord'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectSucceededFundraisingEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProjectSucceededFundraisingEvent'] = ResolversParentTypes['ProjectSucceededFundraisingEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  commonGood?: Resolver<ResolversTypes['CommonGoodRecord'], ParentType, ContextType>;
  fundsRaised?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  team?: Resolver<ResolversTypes['EoaRecord'], ParentType, ContextType>;
  milestone?: Resolver<ResolversTypes['MilestoneRecord'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bundle?: BundleResolvers<ContextType>;
  Burn?: BurnResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  LiquidityPosition?: LiquidityPositionResolvers<ContextType>;
  LiquidityPositionSnapshot?: LiquidityPositionSnapshotResolvers<ContextType>;
  Mint?: MintResolvers<ContextType>;
  Pair?: PairResolvers<ContextType>;
  PairDayData?: PairDayDataResolvers<ContextType>;
  PairHourData?: PairHourDataResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenDayData?: TokenDayDataResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  UniswapDayData?: UniswapDayDataResolvers<ContextType>;
  UniswapFactory?: UniswapFactoryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  AnnouncementEvent?: AnnouncementEventResolvers<ContextType>;
  CommonGoodCreatedEvent?: CommonGoodCreatedEventResolvers<ContextType>;
  CommonGoodEventRecord?: CommonGoodEventRecordResolvers<ContextType>;
  CommonGoodRecord?: CommonGoodRecordResolvers<ContextType>;
  EoaEventRecord?: EoaEventRecordResolvers<ContextType>;
  EoaRecord?: EoaRecordResolvers<ContextType>;
  FactoryRecord?: FactoryRecordResolvers<ContextType>;
  FundsClaimedEvent?: FundsClaimedEventResolvers<ContextType>;
  MetadataUpdatedEvent?: MetadataUpdatedEventResolvers<ContextType>;
  MilestoneRecord?: MilestoneRecordResolvers<ContextType>;
  NextMilestoneStartedEvent?: NextMilestoneStartedEventResolvers<ContextType>;
  PledgeEvent?: PledgeEventResolvers<ContextType>;
  PledgeEventRecord?: PledgeEventRecordResolvers<ContextType>;
  PledgeRecord?: PledgeRecordResolvers<ContextType>;
  PledgeWithdrawnEvent?: PledgeWithdrawnEventResolvers<ContextType>;
  ProjectFailedFundraisingEvent?: ProjectFailedFundraisingEventResolvers<ContextType>;
  ProjectSucceededFundraisingEvent?: ProjectSucceededFundraisingEventResolvers<ContextType>;
}>;


export type MeshContext = UniswapV2Context & CommonGoodContext & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/uniswap-v2/introspectionSchema":
      return import("./sources/uniswap-v2/introspectionSchema");
    
    case ".graphclient/sources/common-good/introspectionSchema":
      return import("./sources/common-good/introspectionSchema");
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources = [];
const transforms = [];
const additionalEnvelopPlugins = [];
const commonGoodTransforms = [];
const uniswapV2Transforms = [];
const additionalTypeDefs = [] as any[];
const commonGoodHandler = new GraphqlHandler({
              name: "common-good",
              config: {"endpoint":"https://api.studio.thegraph.com/query/23484/common-good-goerli/0.006"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("common-good"),
              logger: logger.child("common-good"),
              importFn,
            });
const uniswapV2Handler = new GraphqlHandler({
              name: "uniswap-v2",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("uniswap-v2"),
              logger: logger.child("uniswap-v2"),
              importFn,
            });
sources[0] = {
          name: 'common-good',
          handler: commonGoodHandler,
          transforms: commonGoodTransforms
        }
sources[1] = {
          name: 'uniswap-v2',
          handler: uniswapV2Handler,
          transforms: uniswapV2Transforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: CommonGoodListDocument,
        get rawSDL() {
          return printWithCache(CommonGoodListDocument);
        },
        location: 'CommonGoodListDocument.graphql'
      },{
        document: CommonGoodPageDocument,
        get rawSDL() {
          return printWithCache(CommonGoodPageDocument);
        },
        location: 'CommonGoodPageDocument.graphql'
      },{
        document: GetEoaRecordDocument,
        get rawSDL() {
          return printWithCache(GetEoaRecordDocument);
        },
        location: 'GetEoaRecordDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler() {
  return createMeshHTTPHandler({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type CommonGoodListQueryVariables = Exact<{ [key: string]: never; }>;


export type CommonGoodListQuery = { _meta?: Maybe<{ block: Pick<_Block_, 'number'> }>, bundles: Array<Pick<Bundle, 'id' | 'ethPrice'>>, commonGoodRecords: Array<(
    Pick<CommonGoodRecord, 'id' | 'contractAddress' | 'claimedAmount' | 'currentMilestoneStartDate' | 'lastMilestoneEndDate' | 'teamAddress' | 'adminAddresses' | 'initializerAddress' | 'metadataCID' | 'metadataContents' | 'state' | 'withdrawnPledgerCount' | 'lastUpdateTime' | 'raisedAmount' | 'withdrawnAmount' | 'balance' | 'pledgerCount' | 'createdAt'>
    & { nextEvents: Array<(
      Pick<NextMilestoneStartedEvent, 'id' | 'txHash'>
      & { current: Pick<MilestoneRecord, 'index'> }
    )>, createdEvent: { by: Pick<EoaRecord, 'createdCount' | 'id'> }, milestones: Array<Pick<MilestoneRecord, 'id' | 'index' | 'startDate' | 'duration' | 'minRaisedAmount' | 'fundReleaseAmount' | 'CID' | 'status'>> }
  )> };

export type CommonGoodPageQueryVariables = Exact<{
  id: Scalars['ID'];
  commonGoodId: Scalars['String'];
}>;


export type CommonGoodPageQuery = { commonGoodRecord?: Maybe<(
    Pick<CommonGoodRecord, 'id' | 'contractAddress' | 'claimedAmount' | 'currentMilestoneStartDate' | 'lastMilestoneEndDate' | 'teamAddress' | 'adminAddresses' | 'initializerAddress' | 'metadataCID' | 'metadataContents' | 'state' | 'withdrawnPledgerCount' | 'lastUpdateTime' | 'raisedAmount' | 'withdrawnAmount' | 'balance' | 'pledgerCount' | 'createdAt'>
    & { nextEvents: Array<(
      Pick<NextMilestoneStartedEvent, 'id' | 'txHash'>
      & { current: Pick<MilestoneRecord, 'index'> }
    )>, createdEvent: { by: Pick<EoaRecord, 'createdCount' | 'id'> }, milestones: Array<Pick<MilestoneRecord, 'id' | 'index' | 'startDate' | 'duration' | 'minRaisedAmount' | 'fundReleaseAmount' | 'CID' | 'status'>> }
  )>, pledgeEventRecords: Array<(
    Pick<PledgeEventRecord, 'id' | 'timestamp'>
    & { pledged?: Maybe<(
      Pick<PledgeEvent, 'amount' | 'comment'>
      & { pledge: Pick<PledgeRecord, 'raised' | 'withdrawnAmount' | 'withdrawn'>, by: Pick<EoaRecord, 'id'> }
    )>, withdrew?: Maybe<(
      Pick<PledgeWithdrawnEvent, 'amountWithdrawn'>
      & { pledge: Pick<PledgeRecord, 'raised' | 'withdrawnAmount' | 'withdrawn'>, by: Pick<EoaRecord, 'id'> }
    )> }
  )> };

export type getEoaRecordQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type getEoaRecordQuery = { eoaRecord?: Maybe<(
    Pick<EoaRecord, 'withdrewCount' | 'claimedCount' | 'teamFailedCount' | 'teamSucceededCount' | 'updatesCount' | 'createdAt'>
    & { pledges: Array<(
      Pick<PledgeRecord, 'id' | 'raised' | 'balance' | 'withdrawnAmount' | 'withdrawCount'>
      & { commonGood: Pick<CommonGoodRecord, 'id'>, events: Array<(
        Pick<PledgeEventRecord, 'timestamp'>
        & { pledged?: Maybe<Pick<PledgeEvent, 'amount' | 'comment'>>, withdrew?: Maybe<Pick<PledgeWithdrawnEvent, 'amountWithdrawn'>> }
      )> }
    )> }
  )> };


export const CommonGoodListDocument = gql`
    query CommonGoodList {
  _meta {
    block {
      number
    }
  }
  bundles {
    id
    ethPrice
  }
  commonGoodRecords(orderBy: lastUpdateTime, orderDirection: desc) {
    id
    contractAddress
    claimedAmount
    currentMilestoneStartDate
    lastMilestoneEndDate
    teamAddress
    adminAddresses
    initializerAddress
    metadataCID
    metadataContents
    state
    withdrawnPledgerCount
    lastUpdateTime
    raisedAmount
    withdrawnAmount
    balance
    pledgerCount
    createdAt
    nextEvents {
      id
      txHash
      current {
        index
      }
    }
    createdEvent {
      by {
        createdCount
        id
      }
    }
    milestones(orderBy: index, orderDirection: asc) {
      id
      index
      startDate
      duration
      minRaisedAmount
      fundReleaseAmount
      CID
      status
    }
  }
}
    ` as unknown as DocumentNode<CommonGoodListQuery, CommonGoodListQueryVariables>;
export const CommonGoodPageDocument = gql`
    query CommonGoodPage($id: ID!, $commonGoodId: String!) {
  commonGoodRecord(id: $id) {
    id
    contractAddress
    claimedAmount
    currentMilestoneStartDate
    lastMilestoneEndDate
    teamAddress
    adminAddresses
    initializerAddress
    metadataCID
    metadataContents
    state
    withdrawnPledgerCount
    lastUpdateTime
    raisedAmount
    withdrawnAmount
    balance
    pledgerCount
    createdAt
    nextEvents {
      id
      txHash
      current {
        index
      }
    }
    createdEvent {
      by {
        createdCount
        id
      }
    }
    milestones(orderBy: index, orderDirection: asc) {
      id
      index
      startDate
      duration
      minRaisedAmount
      fundReleaseAmount
      CID
      status
    }
  }
  pledgeEventRecords(
    where: {commonGood: $commonGoodId}
    orderBy: timestamp
    orderDirection: desc
  ) {
    id
    timestamp
    pledged {
      amount
      comment
      pledge {
        raised
        withdrawnAmount
        withdrawn
      }
      by {
        id
      }
    }
    withdrew {
      amountWithdrawn
      pledge {
        raised
        withdrawnAmount
        withdrawn
      }
      by {
        id
      }
    }
  }
}
    ` as unknown as DocumentNode<CommonGoodPageQuery, CommonGoodPageQueryVariables>;
export const getEoaRecordDocument = gql`
    query getEoaRecord($id: ID!) {
  eoaRecord(id: $id) {
    withdrewCount
    claimedCount
    teamFailedCount
    teamSucceededCount
    updatesCount
    createdAt
    pledges(first: 1000) {
      id
      raised
      balance
      withdrawnAmount
      withdrawCount
      commonGood {
        id
      }
      events {
        timestamp
        pledged {
          amount
          comment
        }
        withdrew {
          amountWithdrawn
        }
      }
    }
  }
}
    ` as unknown as DocumentNode<getEoaRecordQuery, getEoaRecordQueryVariables>;




export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    CommonGoodList(variables?: CommonGoodListQueryVariables, options?: C): Promise<CommonGoodListQuery> {
      return requester<CommonGoodListQuery, CommonGoodListQueryVariables>(CommonGoodListDocument, variables, options) as Promise<CommonGoodListQuery>;
    },
    CommonGoodPage(variables: CommonGoodPageQueryVariables, options?: C): Promise<CommonGoodPageQuery> {
      return requester<CommonGoodPageQuery, CommonGoodPageQueryVariables>(CommonGoodPageDocument, variables, options) as Promise<CommonGoodPageQuery>;
    },
    getEoaRecord(variables: getEoaRecordQueryVariables, options?: C): Promise<getEoaRecordQuery> {
      return requester<getEoaRecordQuery, getEoaRecordQueryVariables>(getEoaRecordDocument, variables, options) as Promise<getEoaRecordQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;