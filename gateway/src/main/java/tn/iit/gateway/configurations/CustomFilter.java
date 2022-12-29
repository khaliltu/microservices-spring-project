package tn.iit.gateway.configurations;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.server.ServerWebExchange;

import reactor.core.publisher.Mono;

@Configuration
public class CustomFilter implements GlobalFilter {
	Logger logger = LoggerFactory.getLogger(CustomFilter.class);
	Long time ;
	@Override
	public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
			Date date = new Date();
			time = date.getTime();
			ServerHttpRequest request = exchange.getRequest();
			logger.info("Authoriation = " + time + request.getHeaders().getFirst("Authoriation"));
			return chain.filter(exchange).then(Mono.fromRunnable(() ->
			{
				if (request.getURI().toString().contains("/api/student/")) {
					Date newDate = new Date();
					Long diff = newDate.getTime()-time;
					logger.info("Temps d'exécution: "+newDate.getTime() + diff);
					}
				}));
			}
}