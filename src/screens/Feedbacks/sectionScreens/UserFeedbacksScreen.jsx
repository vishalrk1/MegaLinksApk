import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FEDBACK_SCREEN_DESCRIPTION} from '../../../utils/Constants';
import {fetchUserFeedbackAction} from '../../../redux/actions/getFeedbacksAction';

const UserFeedbackScreen = () => {
  const dispatch = useDispatch();
  const {feedbacks, fetching} = useSelector(state => state.getFeedbacks);

  useEffect(() => {
    dispatch(fetchUserFeedbackAction());
  }, []);

  console.log(fetching);

  return (
    <ScrollView style={styles.backgroundStyle}>
      <SafeAreaView style={{padding: 10}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'left',
            color: '#000',
          }}>
          User Feedbacks
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'left',
            marginTop: 4,
            lineHeight: 20,
          }}>
          {FEDBACK_SCREEN_DESCRIPTION}
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default UserFeedbackScreen;
