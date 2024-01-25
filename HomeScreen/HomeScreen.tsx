import {Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 150,
      }}>
      {/* AnyDict 큰 글씨 */}
      <Text
        style={{
          color: '#333333',
          fontSize: 64,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        AnyDict
      </Text>

      {/* 나만의 단어장 만들기 작은 글씨 */}
      <Text style={{color: '#333333', fontSize: 18, marginBottom: 60}}>
        나만의 단어장 만들기
      </Text>

      {/* 중앙 하단에 2개의 네모난 버튼 */}
      <TouchableOpacity
        style={{
          backgroundColor: '#00BFFF',
          padding: 10,
          margin: 10,
          width: 200,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('WordPage')}>
        <Text style={{color: '#F5F5DC', fontWeight: 'bold'}}>
          내 단어장 목록
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#00BFFF',
          padding: 10,
          margin: 10,
          width: 200,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('DownloadPage')}>
        <Text style={{color: '#F5F5DC', fontWeight: 'bold'}}>
          단어장 다운로드
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
