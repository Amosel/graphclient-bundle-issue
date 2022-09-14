
import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace CommonGoodTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

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

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

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

export type Query = {
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
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
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


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
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
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
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


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

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

}
export type QueryCommonGoodSdk = {
  /** null **/
  factoryRecord: InContextSdkMethod<CommonGoodTypes.Query['factoryRecord'], CommonGoodTypes.QueryfactoryRecordArgs, MeshContext>,
  /** null **/
  factoryRecords: InContextSdkMethod<CommonGoodTypes.Query['factoryRecords'], CommonGoodTypes.QueryfactoryRecordsArgs, MeshContext>,
  /** null **/
  commonGoodCreatedEvent: InContextSdkMethod<CommonGoodTypes.Query['commonGoodCreatedEvent'], CommonGoodTypes.QuerycommonGoodCreatedEventArgs, MeshContext>,
  /** null **/
  commonGoodCreatedEvents: InContextSdkMethod<CommonGoodTypes.Query['commonGoodCreatedEvents'], CommonGoodTypes.QuerycommonGoodCreatedEventsArgs, MeshContext>,
  /** null **/
  pledgeEvent: InContextSdkMethod<CommonGoodTypes.Query['pledgeEvent'], CommonGoodTypes.QuerypledgeEventArgs, MeshContext>,
  /** null **/
  pledgeEvents: InContextSdkMethod<CommonGoodTypes.Query['pledgeEvents'], CommonGoodTypes.QuerypledgeEventsArgs, MeshContext>,
  /** null **/
  pledgeWithdrawnEvent: InContextSdkMethod<CommonGoodTypes.Query['pledgeWithdrawnEvent'], CommonGoodTypes.QuerypledgeWithdrawnEventArgs, MeshContext>,
  /** null **/
  pledgeWithdrawnEvents: InContextSdkMethod<CommonGoodTypes.Query['pledgeWithdrawnEvents'], CommonGoodTypes.QuerypledgeWithdrawnEventsArgs, MeshContext>,
  /** null **/
  metadataUpdatedEvent: InContextSdkMethod<CommonGoodTypes.Query['metadataUpdatedEvent'], CommonGoodTypes.QuerymetadataUpdatedEventArgs, MeshContext>,
  /** null **/
  metadataUpdatedEvents: InContextSdkMethod<CommonGoodTypes.Query['metadataUpdatedEvents'], CommonGoodTypes.QuerymetadataUpdatedEventsArgs, MeshContext>,
  /** null **/
  announcementEvent: InContextSdkMethod<CommonGoodTypes.Query['announcementEvent'], CommonGoodTypes.QueryannouncementEventArgs, MeshContext>,
  /** null **/
  announcementEvents: InContextSdkMethod<CommonGoodTypes.Query['announcementEvents'], CommonGoodTypes.QueryannouncementEventsArgs, MeshContext>,
  /** null **/
  nextMilestoneStartedEvent: InContextSdkMethod<CommonGoodTypes.Query['nextMilestoneStartedEvent'], CommonGoodTypes.QuerynextMilestoneStartedEventArgs, MeshContext>,
  /** null **/
  nextMilestoneStartedEvents: InContextSdkMethod<CommonGoodTypes.Query['nextMilestoneStartedEvents'], CommonGoodTypes.QuerynextMilestoneStartedEventsArgs, MeshContext>,
  /** null **/
  projectSucceededFundraisingEvent: InContextSdkMethod<CommonGoodTypes.Query['projectSucceededFundraisingEvent'], CommonGoodTypes.QueryprojectSucceededFundraisingEventArgs, MeshContext>,
  /** null **/
  projectSucceededFundraisingEvents: InContextSdkMethod<CommonGoodTypes.Query['projectSucceededFundraisingEvents'], CommonGoodTypes.QueryprojectSucceededFundraisingEventsArgs, MeshContext>,
  /** null **/
  projectFailedFundraisingEvent: InContextSdkMethod<CommonGoodTypes.Query['projectFailedFundraisingEvent'], CommonGoodTypes.QueryprojectFailedFundraisingEventArgs, MeshContext>,
  /** null **/
  projectFailedFundraisingEvents: InContextSdkMethod<CommonGoodTypes.Query['projectFailedFundraisingEvents'], CommonGoodTypes.QueryprojectFailedFundraisingEventsArgs, MeshContext>,
  /** null **/
  fundsClaimedEvent: InContextSdkMethod<CommonGoodTypes.Query['fundsClaimedEvent'], CommonGoodTypes.QueryfundsClaimedEventArgs, MeshContext>,
  /** null **/
  fundsClaimedEvents: InContextSdkMethod<CommonGoodTypes.Query['fundsClaimedEvents'], CommonGoodTypes.QueryfundsClaimedEventsArgs, MeshContext>,
  /** null **/
  commonGoodEventRecord: InContextSdkMethod<CommonGoodTypes.Query['commonGoodEventRecord'], CommonGoodTypes.QuerycommonGoodEventRecordArgs, MeshContext>,
  /** null **/
  commonGoodEventRecords: InContextSdkMethod<CommonGoodTypes.Query['commonGoodEventRecords'], CommonGoodTypes.QuerycommonGoodEventRecordsArgs, MeshContext>,
  /** null **/
  milestoneRecord: InContextSdkMethod<CommonGoodTypes.Query['milestoneRecord'], CommonGoodTypes.QuerymilestoneRecordArgs, MeshContext>,
  /** null **/
  milestoneRecords: InContextSdkMethod<CommonGoodTypes.Query['milestoneRecords'], CommonGoodTypes.QuerymilestoneRecordsArgs, MeshContext>,
  /** null **/
  commonGoodRecord: InContextSdkMethod<CommonGoodTypes.Query['commonGoodRecord'], CommonGoodTypes.QuerycommonGoodRecordArgs, MeshContext>,
  /** null **/
  commonGoodRecords: InContextSdkMethod<CommonGoodTypes.Query['commonGoodRecords'], CommonGoodTypes.QuerycommonGoodRecordsArgs, MeshContext>,
  /** null **/
  pledgeEventRecord: InContextSdkMethod<CommonGoodTypes.Query['pledgeEventRecord'], CommonGoodTypes.QuerypledgeEventRecordArgs, MeshContext>,
  /** null **/
  pledgeEventRecords: InContextSdkMethod<CommonGoodTypes.Query['pledgeEventRecords'], CommonGoodTypes.QuerypledgeEventRecordsArgs, MeshContext>,
  /** null **/
  pledgeRecord: InContextSdkMethod<CommonGoodTypes.Query['pledgeRecord'], CommonGoodTypes.QuerypledgeRecordArgs, MeshContext>,
  /** null **/
  pledgeRecords: InContextSdkMethod<CommonGoodTypes.Query['pledgeRecords'], CommonGoodTypes.QuerypledgeRecordsArgs, MeshContext>,
  /** null **/
  eoaEventRecord: InContextSdkMethod<CommonGoodTypes.Query['eoaEventRecord'], CommonGoodTypes.QueryeoaEventRecordArgs, MeshContext>,
  /** null **/
  eoaEventRecords: InContextSdkMethod<CommonGoodTypes.Query['eoaEventRecords'], CommonGoodTypes.QueryeoaEventRecordsArgs, MeshContext>,
  /** null **/
  eoaRecord: InContextSdkMethod<CommonGoodTypes.Query['eoaRecord'], CommonGoodTypes.QueryeoaRecordArgs, MeshContext>,
  /** null **/
  eoaRecords: InContextSdkMethod<CommonGoodTypes.Query['eoaRecords'], CommonGoodTypes.QueryeoaRecordsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<CommonGoodTypes.Query['_meta'], CommonGoodTypes.Query_metaArgs, MeshContext>
};

export type MutationCommonGoodSdk = {

};

export type SubscriptionCommonGoodSdk = {
  /** null **/
  factoryRecord: InContextSdkMethod<CommonGoodTypes.Subscription['factoryRecord'], CommonGoodTypes.SubscriptionfactoryRecordArgs, MeshContext>,
  /** null **/
  factoryRecords: InContextSdkMethod<CommonGoodTypes.Subscription['factoryRecords'], CommonGoodTypes.SubscriptionfactoryRecordsArgs, MeshContext>,
  /** null **/
  commonGoodCreatedEvent: InContextSdkMethod<CommonGoodTypes.Subscription['commonGoodCreatedEvent'], CommonGoodTypes.SubscriptioncommonGoodCreatedEventArgs, MeshContext>,
  /** null **/
  commonGoodCreatedEvents: InContextSdkMethod<CommonGoodTypes.Subscription['commonGoodCreatedEvents'], CommonGoodTypes.SubscriptioncommonGoodCreatedEventsArgs, MeshContext>,
  /** null **/
  pledgeEvent: InContextSdkMethod<CommonGoodTypes.Subscription['pledgeEvent'], CommonGoodTypes.SubscriptionpledgeEventArgs, MeshContext>,
  /** null **/
  pledgeEvents: InContextSdkMethod<CommonGoodTypes.Subscription['pledgeEvents'], CommonGoodTypes.SubscriptionpledgeEventsArgs, MeshContext>,
  /** null **/
  pledgeWithdrawnEvent: InContextSdkMethod<CommonGoodTypes.Subscription['pledgeWithdrawnEvent'], CommonGoodTypes.SubscriptionpledgeWithdrawnEventArgs, MeshContext>,
  /** null **/
  pledgeWithdrawnEvents: InContextSdkMethod<CommonGoodTypes.Subscription['pledgeWithdrawnEvents'], CommonGoodTypes.SubscriptionpledgeWithdrawnEventsArgs, MeshContext>,
  /** null **/
  metadataUpdatedEvent: InContextSdkMethod<CommonGoodTypes.Subscription['metadataUpdatedEvent'], CommonGoodTypes.SubscriptionmetadataUpdatedEventArgs, MeshContext>,
  /** null **/
  metadataUpdatedEvents: InContextSdkMethod<CommonGoodTypes.Subscription['metadataUpdatedEvents'], CommonGoodTypes.SubscriptionmetadataUpdatedEventsArgs, MeshContext>,
  /** null **/
  announcementEvent: InContextSdkMethod<CommonGoodTypes.Subscription['announcementEvent'], CommonGoodTypes.SubscriptionannouncementEventArgs, MeshContext>,
  /** null **/
  announcementEvents: InContextSdkMethod<CommonGoodTypes.Subscription['announcementEvents'], CommonGoodTypes.SubscriptionannouncementEventsArgs, MeshContext>,
  /** null **/
  nextMilestoneStartedEvent: InContextSdkMethod<CommonGoodTypes.Subscription['nextMilestoneStartedEvent'], CommonGoodTypes.SubscriptionnextMilestoneStartedEventArgs, MeshContext>,
  /** null **/
  nextMilestoneStartedEvents: InContextSdkMethod<CommonGoodTypes.Subscription['nextMilestoneStartedEvents'], CommonGoodTypes.SubscriptionnextMilestoneStartedEventsArgs, MeshContext>,
  /** null **/
  projectSucceededFundraisingEvent: InContextSdkMethod<CommonGoodTypes.Subscription['projectSucceededFundraisingEvent'], CommonGoodTypes.SubscriptionprojectSucceededFundraisingEventArgs, MeshContext>,
  /** null **/
  projectSucceededFundraisingEvents: InContextSdkMethod<CommonGoodTypes.Subscription['projectSucceededFundraisingEvents'], CommonGoodTypes.SubscriptionprojectSucceededFundraisingEventsArgs, MeshContext>,
  /** null **/
  projectFailedFundraisingEvent: InContextSdkMethod<CommonGoodTypes.Subscription['projectFailedFundraisingEvent'], CommonGoodTypes.SubscriptionprojectFailedFundraisingEventArgs, MeshContext>,
  /** null **/
  projectFailedFundraisingEvents: InContextSdkMethod<CommonGoodTypes.Subscription['projectFailedFundraisingEvents'], CommonGoodTypes.SubscriptionprojectFailedFundraisingEventsArgs, MeshContext>,
  /** null **/
  fundsClaimedEvent: InContextSdkMethod<CommonGoodTypes.Subscription['fundsClaimedEvent'], CommonGoodTypes.SubscriptionfundsClaimedEventArgs, MeshContext>,
  /** null **/
  fundsClaimedEvents: InContextSdkMethod<CommonGoodTypes.Subscription['fundsClaimedEvents'], CommonGoodTypes.SubscriptionfundsClaimedEventsArgs, MeshContext>,
  /** null **/
  commonGoodEventRecord: InContextSdkMethod<CommonGoodTypes.Subscription['commonGoodEventRecord'], CommonGoodTypes.SubscriptioncommonGoodEventRecordArgs, MeshContext>,
  /** null **/
  commonGoodEventRecords: InContextSdkMethod<CommonGoodTypes.Subscription['commonGoodEventRecords'], CommonGoodTypes.SubscriptioncommonGoodEventRecordsArgs, MeshContext>,
  /** null **/
  milestoneRecord: InContextSdkMethod<CommonGoodTypes.Subscription['milestoneRecord'], CommonGoodTypes.SubscriptionmilestoneRecordArgs, MeshContext>,
  /** null **/
  milestoneRecords: InContextSdkMethod<CommonGoodTypes.Subscription['milestoneRecords'], CommonGoodTypes.SubscriptionmilestoneRecordsArgs, MeshContext>,
  /** null **/
  commonGoodRecord: InContextSdkMethod<CommonGoodTypes.Subscription['commonGoodRecord'], CommonGoodTypes.SubscriptioncommonGoodRecordArgs, MeshContext>,
  /** null **/
  commonGoodRecords: InContextSdkMethod<CommonGoodTypes.Subscription['commonGoodRecords'], CommonGoodTypes.SubscriptioncommonGoodRecordsArgs, MeshContext>,
  /** null **/
  pledgeEventRecord: InContextSdkMethod<CommonGoodTypes.Subscription['pledgeEventRecord'], CommonGoodTypes.SubscriptionpledgeEventRecordArgs, MeshContext>,
  /** null **/
  pledgeEventRecords: InContextSdkMethod<CommonGoodTypes.Subscription['pledgeEventRecords'], CommonGoodTypes.SubscriptionpledgeEventRecordsArgs, MeshContext>,
  /** null **/
  pledgeRecord: InContextSdkMethod<CommonGoodTypes.Subscription['pledgeRecord'], CommonGoodTypes.SubscriptionpledgeRecordArgs, MeshContext>,
  /** null **/
  pledgeRecords: InContextSdkMethod<CommonGoodTypes.Subscription['pledgeRecords'], CommonGoodTypes.SubscriptionpledgeRecordsArgs, MeshContext>,
  /** null **/
  eoaEventRecord: InContextSdkMethod<CommonGoodTypes.Subscription['eoaEventRecord'], CommonGoodTypes.SubscriptioneoaEventRecordArgs, MeshContext>,
  /** null **/
  eoaEventRecords: InContextSdkMethod<CommonGoodTypes.Subscription['eoaEventRecords'], CommonGoodTypes.SubscriptioneoaEventRecordsArgs, MeshContext>,
  /** null **/
  eoaRecord: InContextSdkMethod<CommonGoodTypes.Subscription['eoaRecord'], CommonGoodTypes.SubscriptioneoaRecordArgs, MeshContext>,
  /** null **/
  eoaRecords: InContextSdkMethod<CommonGoodTypes.Subscription['eoaRecords'], CommonGoodTypes.SubscriptioneoaRecordsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<CommonGoodTypes.Subscription['_meta'], CommonGoodTypes.Subscription_metaArgs, MeshContext>
};
export type CommonGoodContext = {
      ["common-good"]: { Query: QueryCommonGoodSdk, Mutation: MutationCommonGoodSdk, Subscription: SubscriptionCommonGoodSdk },
      
    };