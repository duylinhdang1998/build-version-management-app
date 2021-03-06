import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { CreateNewProjectCard } from '../Card'

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 20,
  },
  iconTextWrapper: {
    marginLeft: 10,
    backgroundColor: '#3D5AFE',
    borderRadius: 30,
    padding: 2,
  },
  iconText: {
    color: '#FFF',
    fontSize: 14,
  },
  content: {
    flexDirection: 'column',
    paddingTop: 10,
  }
});

const VerticalList = ({ children, title, number, ...rest }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.iconTextWrapper}>
          <Text style={styles.iconText}>{number}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={{
            // flexGrow: 1,
            // flex: 1,
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            // flexShrink: 1,
            flexDirection: 'row',
          }}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <CreateNewProjectCard text="Create New Project"/>
          {children}
        </ScrollView>
      </View>
    </View>
  )
}

VerticalList.propTypes = {
  // children: PropTypes.element.isRequired
}

export { VerticalList }
