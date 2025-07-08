import { Button } from "@rhinolabs/ui"
import { Link } from "@tanstack/react-router"

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Minimal Rhino Auth</h1>
      <Link to="/auth/signin" className="mb-4">
        <Button variant="default" size="lg">
          <p className="text-xl">Get Started</p>
        </Button>
      </Link>
    </div>
  )
}

export default App
