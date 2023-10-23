import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function BaiTap4() {
  const navigation = useNavigation();
  const [duLieu, setDuLieu] = useState(null);
  useEffect(() => {
    get();
  }, []);
  const get = () => {
    axios
      .get('https://6531d4ed4d4c2e3f333d4e53.mockapi.io/UserName/student')
      .then((response) => {
        setDuLieu(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const post = () => {
    axios
      .post('https://6531d4ed4d4c2e3f333d4e53.mockapi.io/UserName/student', {
        name: 'POST',
        Lop: 112,
        MSSV: '120000',
      })
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
        title="⇦ Quay Lại Bài Tập 3"
        onPress={() => navigation.goBack()}></Button>
      <Button
        title="Chuyển đến bài tập 5 ⇨"
        onPress={() => navigation.navigate('Bài Tập 5')}></Button>
      <Button color="green" title="Post Dữ Liệu " onPress={post}></Button>
      <Text>
        Bài Tập 4: dùng Axios POST để thêm dữ liệu và dùng phương thức GET để
        lấy dữ liệu và hiển thị lên màn hình
      </Text>

      {duLieu ? (
        <ul>
          {duLieu.map((item) => (
            <>
              <Text style={{ fontWeight: 'bold' }}>Thông tin</Text>
              <li key={item.id}>MSSV: {item.MSSV}</li>
              <li key={item.id}>Tên: {item.name}</li>
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
