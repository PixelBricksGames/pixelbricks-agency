import { connect } from 'react-redux';
import Menu from './../components/menu/Menu';

const mapStateToProps = state => ({
	notifications: state.menu.workCompleted
});

export default connect(
	mapStateToProps
)(Menu);