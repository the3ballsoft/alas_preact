import { connect } from 'preact-redux'
import { selectHeading } from '../actions/headings';
import Profile from '../components/profile';

const mapStateToProps = (state) => {
  return {
    headings: state.headings  
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHeadingClick: (heading) => {
      dispatch(selectHeading(heading))
    }
  }
}

const HeadingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

export default HeadingListContainer;
