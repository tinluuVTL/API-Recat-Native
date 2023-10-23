import { Button , Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useState,useEffect} from 'react';
import axios from 'axios';
export default function BaiTap3() {
  const navigation = useNavigation();
  const [duLieu,setDuLieu]=useState(null);
  useEffect(() => {
  axios.get('https://6531d4ed4d4c2e3f333d4e53.mockapi.io/UserName/student')
    .then(response => {
      setDuLieu(response.data);
    })
    .catch(error => {
      console.warn('Error:', error);
    });
}, []);
  return (
     <View>
     <Button title='⇦ Quay Lại Bài Tập 2' onPress={()=>navigation.goBack()}></Button>
     <Button title='Chuyển đến bài tập 4 ⇨'onPress={() => navigation.navigate('Bài Tập 4')}></Button>
      <Text >
        Bài Tập 3: dùng Axios GET dữ liệu và hiển thị lên màn hình
      </Text>
     
      {duLieu ? (
        <ul>
          {duLieu.map(item => (
            <>
            <Text style={{fontWeight:'bold'}} >Thông tin
            </Text>
            <li key={item.id}>MSSV: {item.MSSV}</li>
            <li key={item.id}>Tên: {item.name }</li>
             <li key={item.id}>Lớp: {item.Lop}</li>
         

             
             </>
          ))}
        </ul>
      ) : (
        <p>Đang tải dữ liệu ~~~~</p>
      )}
      
    </View>
    
  );
}