import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {fetchUserFeedbackAction} from '../../../redux/actions/getFeedbacksAction';

import {UserRound} from 'lucide-react-native';
import {AppColors} from '../../../utils/Constants';

const UserFeedbackScreen = () => {
  const dispatch = useDispatch();
  const {feedbacks, fetching} = useSelector(state => state.getFeedbacks);

  useEffect(() => {
    dispatch(fetchUserFeedbackAction());
  }, []);

  return (
    <ScrollView
      style={styles.backgroundStyle}
      showsVerticalScrollIndicator={false}>
      {fetching ? (
        <View
          style={{
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}>
          <ActivityIndicator
            size={50}
            color={AppColors.orangeBg}
            style={{height: 100, width: 100}}
          />
        </View>
      ) : (
        feedbacks.map((feedback, index) => {
          return (
            <View key={index} style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: 10,
                  gap: 8,
                }}>
                <View
                  style={{
                    padding: 4,
                    borderWidth: 1,
                    borderRadius: 100,
                    backgroundColor: 'whitesmoke',
                  }}>
                  <UserRound size={16} color="black" />
                </View>
                <Text style={{fontWeight: '500', fontSize: 18, color: 'black'}}>
                  {feedback.userName}
                </Text>
              </View>
              <Text style={{fontSize: 16, color: 'gray', fontWeight: '600'}}>
                {feedback.message}
              </Text>
            </View>
          );
        })
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    marginHorizontal: 8,
    padding: 20,
    borderRadius: 18,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});

export default UserFeedbackScreen;
