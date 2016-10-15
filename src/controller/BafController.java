package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;



@Controller
@RequestMapping(value="/")
public class BafController {

	@RequestMapping(value="homepage", method=RequestMethod.GET)
	public ModelAndView homePageBaf(){
		
		ModelAndView model = new ModelAndView("BafApp");
		
		return model;
	}
	
	@RequestMapping(value="listfriend", method=RequestMethod.GET)
	public ModelAndView listFriend(){
		
		ModelAndView model = new ModelAndView("ListFriend");
		
		return model;
	}
	
	@RequestMapping(value="friend", method=RequestMethod.GET)
	public ModelAndView Friend(){
		
		ModelAndView model = new ModelAndView("Friends");
		
		return model;
	}
	
	@RequestMapping(value="policy", method=RequestMethod.GET)
	public ModelAndView Policy(){
		
		ModelAndView model = new ModelAndView("policy");
		
		return model;
	}
	
	@RequestMapping(value="service", method=RequestMethod.GET)
	public ModelAndView Service(){
		
		ModelAndView model = new ModelAndView("service");
		
		return model;
	}
	
	@RequestMapping(value="test", method=RequestMethod.GET)
	public ModelAndView test(){
		
		ModelAndView model = new ModelAndView("test");
		
		return model;
	}
	
	@RequestMapping(value="page")
	public ModelAndView pag(){
		
		ModelAndView model = new ModelAndView("page");
		
		return model;
	}
	
}
