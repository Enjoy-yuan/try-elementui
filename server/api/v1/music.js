const Router =require("koa-router")
const router=new Router()

router.get("/v1/music",ctx=>{
    ctx.body={
		key: 'music'
	}
})

module.exports =router