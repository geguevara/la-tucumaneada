import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const createIssue = async (
  title,
  desc,
  priority,
  currentUser
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}issues`,
      {
        title,
        desc,
        priority,
      },
      {
        headers: {
          'x-token': currentUser.token,
        },
      }
    );
    alert('Issue creado correctamente');
    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.error.msg)
}
}