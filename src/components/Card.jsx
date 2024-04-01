import { Image, View, Text } from "react-native"

const Card = ({ photo, name, price }) => {
    return(
        <View className='border-2 border-black'>
            <Image source={{uri: photo}} className='w-1/2 h-1/2'/>
            <View>
                <Text>{name}</Text>
                <Text>{price}</Text>
            </View>
        </View>
    );
}

export default Card;