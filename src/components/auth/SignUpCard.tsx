import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Form, Input, Button, Separator } from "@rhinolabs/ui";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email(),
    password: z.string().min(6),
});

export const SignUpCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    return (<Card className="px-10 py-8 shadow-2xl">
        <div className='mb-10'>
            <p className='font-light text-gray-600/75'>Start your journey</p>
            <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
        </div>
        <Form {...(form as any)}>
            <form onSubmit={form.handleSubmit(console.log)} className="space-y-5">
                <Form.Field
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <Form.Item>
                            <Form.Label className='font-normal'>Full Name</Form.Label>
                            <Form.Control>
                                <Input type="text" className='h-15 min-w-md' placeholder="Enter your full name" {...field} />
                            </Form.Control>
                            <Form.Message className='text-xs' />
                        </Form.Item>
                    )}
                />
                <Form.Field
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <Form.Item>
                            <Form.Label className='font-normal'>Email</Form.Label>
                            <Form.Control>
                                <Input type="email" className='h-15 min-w-md' placeholder="Enter your email" {...field} />
                            </Form.Control>
                            <Form.Message className='text-xs' />
                        </Form.Item>
                    )}
                />
                <Form.Field
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <Form.Item>
                            <Form.Label className='font-normal'>Password</Form.Label>
                            <Form.Control>
                                <Input type="password" className='h-15 min-w-md' placeholder="Enter your password" {...field} />
                            </Form.Control>
                            <div className="flex justify-between items-center mt-1 text-xs h-4">
                                <span className={form.formState.errors.password ? "text-red-500" : "invisible"}>
                                    <Form.Message className='text-xs' />
                                </span>
                                <Link
                                    to="/auth/forgot-password"
                                    className="text-blue-500 hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </Form.Item>
                    )}
                />
                <Button type="submit" className='min-w-full h-15 text-lg font-semibold'>
                    Sign up
                </Button>
            </form>
        </Form>
        <Separator className="mt-10" />
        <div className='flex flex-col items-center mt-5'>
            <p className='text-gray-600/50'>or sign up with</p>
            <div className='flex flex-row items-center gap-4 mt-5'>
                <Button variant="outline" className='h-12 w-24'>
                    <i className="icon-[logos--facebook] h-7 w-7" />
                </Button>
                <Button variant="outline" className='h-12 w-24'>
                    <i className="icon-[logos--google-icon] h-7 w-7" />
                </Button>
                <Button variant="outline" className='h-12 w-24'>
                    <i className="icon-[logos--github-icon] h-7 w-7" />
                </Button>
            </div>
        </div>
        <div>
            <p className='text-gray-600/50 mt-8 text-sm'>
                Have an account? <Link to="/auth/signin" className='text-blue-500 hover:underline'>Sign in</Link>
            </p>
        </div>
    </Card>);
}