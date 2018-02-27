package ssm.service;

import java.util.List;

import ssm.entity.User;

public interface UserService {

	List<User> getUserList(int offset, int limit);
	 
}
