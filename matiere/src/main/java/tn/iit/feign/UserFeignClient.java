package tn.iit.feign;

import java.util.Optional;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import tn.iit.feign.proxy.User;


@FeignClient(value = "api-gateway/user-server")
public interface UserFeignClient {
	
	@GetMapping("api/users/{id}")
	public Optional<User> getById(@PathVariable Long id);
	
	
}
