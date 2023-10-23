import { Button , Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useState,useEffect} from 'react';
export default function TrangChu() {
  const navigation = useNavigation();
  const [duLieu,setDuLieu]=useState(null);
  
  const layDuLieu=()=>{
    fetch('https://6531d4ed4d4c2e3f333d4e53.mockapi.io/UserName/student')
      .then(response => response.json())
      .then(data => setDuLieu(data))
      .catch(error => {
        console.warn('Error:', error);
      });
  }
  useEffect(() => {
    layDuLieu();
  }, []);
  return (
    <View>
     <Button title='Chuyển đến bài tập 3 ⇨'onPress={() => navigation.navigate('Bài Tập 3')}></Button>
      <Text >
        Bài Tập 2: Fetch GET dữ liệu và hiển thị lên màn hình
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