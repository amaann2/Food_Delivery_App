import { Component } from "react";
import Error from "./Error";
export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '', errorStack: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({ errorStack: errorInfo.componentStack });
  }
  render() {
    if (this.state.hasError) {
      return <Error message={this.state.errorMessage} stack={this.state.errorStack} />
    } else {
      // eslint-disable-next-line react/prop-types
      return this.props.children
    }

  }
}
