import { h, Component } from 'preact';
import HeadingListContainer from '../containers/HeadingsListContainer';
import Profile from '../components/profile';

class HeadingsPage extends Component {
  render() {
    return (
      <div>
        <HeadingListContainer/>
      </div>
    );
  }
}


export default HeadingsPage;
