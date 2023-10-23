import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function BaiTap5() {
  const navigation = useNavigation();
  const [duLieu, setDuLieu] = useState(null);
  useEffect(() => {
    get();
  }, []);
  const get = () => {
    axios
      .get('https://6531d4ed4d4c2e3f333d4e53.mockapi.io/UserName/student/')
      .then((response) => {
        setDuLieu(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const put = (mssv) => {
    axios
      .put(`https://6531d4ed4d4c2e3f333d4e53.mockapi.io/UserName/student/${mssv}`, {
        name: 'Da Sua 2',
        Lop: 120
      })
      .then((response) => {
        console.warn('Success:', response.data);
        get();
      })
      .catch((error) => {
        console.warn('Error:', error);
      });
  };
  const xoa = (mssv) => {
    axios
      .delete(`https://6531d4ed4d4c2e3f333d4e53.mockapi.io/UserName/student/${mssv}`)
      .then((response) => {
        console.warn('Success:', response.data);
        get();
      })
      .catch((error) => {
        console.warn('Error:', error);
      });
  };
  return (
    <View>
      <Button
        title="⇦ Quay Lại Bài Tập 4"
        onPress={() => navigation.goBack()}></Button>
      

      <Text>
        Bài Tập 5: dùng Axios PUT để sửa dữ liệu và dùng phương thức GET để lấy dữ liệu và hiển thị lên màn hình
      </Text>

      {duLieu ? (
        <ul>
          {duLieu.map((item) => (
            <>
              <Text style={{ fontWeight: 'bold' }}>Thông tin</Text>
              <li key={item.id}>MSSV: {item.MSSV}</li>
              <li key={item.id}>Tên: {item.name}</li>
              <li key={item.id}>Lớp: {item.Lop}</li>
                    <Button title="Sửa Dữ Liệu " onPress={()=>put(item.MSSV)}></Button>
                    <Button color='red' title="Xóa Dữ Liệu " onPress={()=>xoa(item.MSSV)}></Button>
            </>
          ))}
        </ul>
      ) : (
        <p>Đang tải dữ liệu ~~~~</p>
      )}
    </View>
  );
}
