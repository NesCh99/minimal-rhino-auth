import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Form, Input, Button } from "@rhinolabs/ui";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email(),
    password: z.string().min(6),
});

const SOCIAL_BUTTONS = [
    {
        name: "Facebook",
        icon: "icon-[logos--facebook]",
    },
    {
        name: "Google",
        icon: "icon-[logos--google-icon]",
    },
    {
        name: "GitHub",
        icon: "icon-[logos--github-icon]",
    },
];

export const SignUpCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    return (
        <Card className="px-10 py-8 shadow-2xl">
            <div className="flex flex-row items-center justify-between mb-5 gap-10">
                <div className="flex flex-col items-start">
                    <div className='mb-10'>
                        <p className='font-light text-gray-600/75'>Start your journey</p>
                        <h1 className="text-4xl font-bold">Sign Up</h1>
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
                    <p className='text-gray-600/50 mt-8 text-sm'>
                        Have an account? <Link to="/auth/signin" className='text-blue-500 hover:underline'>Sign in</Link>
                    </p>
                </div>
                <div className="relative flex items-center justify-center h-80 w-8">
                    <div className="absolute left-1/2 top-0 w-px h-full bg-gray-300 -translate-x-1/2"></div>
                    <div className="relative z-10 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-500 font-semibold">
                        or
                    </div>
                </div>
                <div className='flex flex-col gap-4 mt-5 h-full justify-between'>
                    {
                        SOCIAL_BUTTONS.map((button) => (
                            <Button key={button.name} variant="outline" className="flex min-w-sm h-15 px-4">
                                <div className="flex-1 flex justify-end">
                                    <i className={`${button.icon} h-8 w-8`} />
                                </div>
                                <div className="flex-2 flex justify-start items-center">
                                    <span>Sign up with {button.name}</span>
                                </div>
                            </Button>
                        ))
                    }
                </div>
            </div>
        </Card>
    );
}