import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements'
import { View, TextInput } from 'react-native'

const Search = () => {
    const [user, setUser] = useState('');
    
    return (
        <View>
        <SearchBar 
            platform='default'
            round='true'
        >
            <TextInput 
                placeholder='Search...'
                onChangeText={(user) => setUser(user)}
            />
        </SearchBar>
    </View>
    )
}

export default Search