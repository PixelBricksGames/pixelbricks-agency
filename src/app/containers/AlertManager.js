import { connect } from 'react-redux';
import Alert from '../components/alert/Alert';

const mapStateToProps = state => state.get('alert');

export default connect(
	mapStateToProps
)(Alert);