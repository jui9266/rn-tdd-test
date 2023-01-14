import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AppStackParamList = {
  Root: undefined;
  Test: undefined;
  MyPage: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Setting: undefined;
};

export type AppStackProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type RootTabProps<T extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, T>,
    NativeStackScreenProps<AppStackParamList, 'Root'>
  >;
