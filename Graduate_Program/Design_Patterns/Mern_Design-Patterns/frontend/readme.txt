Frontend Description:
We wrap the entire application in a Router component. This component provides routing functionality to all of its children.
The Navbar component is placed outside of the Switch component so it's always visible regardless of the current route.
The Switch component is used to render only the first Route or Redirect that matches the current location.
Each Route component defines a route for a specific path. When the path in the URL matches the path defined by a Route, that Route's component is rendered.
We use the exact prop in the Route for the HomePage component to ensure that this component is only rendered when the path is exactly "/". If we didn't include exact, HomePage would also render for "/quiz", "/result", and "/admin" because the path "/" is included in these paths.
The :id in the path for the QuizPage route is a URL parameter. You can access the value of :id in your QuizPage component via this.props.match.params.id (class component) or useParams().id (functional component with hooks).


Dynamic Data Fetching:
1.Fetching Data from Backend: To fetch data from the backend, you will use the fetch function or a library like axios. I will demonstrate with axios in this case. If you haven't installed it yet, you can do so with npm install axios.

2.Using Data in Components: Once you fetch the data, you will want to store it in the state of your component so you can use it in your render method.

3.Displaying Data: In your render method, you can map over your data to display it.