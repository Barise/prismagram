//clientState는 app이 오프라인일떄 발생하는거
//원래는 redux를 사용해서함
//하지만여기선 local state로 사용

export const defaults = {
    isLogginedIn : localStorage.getItem("token") !== null ? true: false
};

export const resolvers = {
    Mutation: {
        logUserIn : (_, {token}, {cache}) =>{
            localStorage.setItem("token",token);
            cache.writeData({
                data:{
                    isLogginedIn:true
                }
            });
            return null;
    },
    logUserOut:(_,__,{cache }) =>{
        localStorage.removeItem("token");
        window.location.reload();
        return null;
        }
    }
};

