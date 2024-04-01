import { Image, View } from "react-native"

const Card = ({ photo, name, price }) => {
    return(
        <View>
            <Image source={photo}/>
            <View>
                <Text>{name}</Text>
                <Text>{price}</Text>
            </View>
        </View>
    );
}

export default Card;