import React from 'react'
import { SectionList, StyleSheet, View, Text} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
      },
      sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'green',
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      }
});

const SectionListBasics = () => {
    return(
        <View style={styles.container}>
            <SectionList
                sections={[
                    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}

                // Render the Section Header
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>
                        {section.title}
                    </Text>
                )}

                // Extract the data into the variable 'item'
                keyExtractor={item => `basicListEntry-${item}`}

                // Render the item
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                
            />
        </View>
    )
}

export default SectionListBasics;