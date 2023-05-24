import { createParamDecorator, ExecutionContext, Logger } from "@nestjs/common";
export  const  CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext)=>{
    const req = context.switchToHttp().getRequest();
    const user = req.user;
    // console.log("user in CurrentUser : ", user);
    Logger.log('user in CurrentUser Decorator:',user);
    
    return user;
})