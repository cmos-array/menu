package com.didispace.service;

import com.didispace.domain.MyUser;
import java.util.List;

/**
 * @author CMOS_ARRAY
 * @version 1.0.0
 * @date 10/9/18 下午7:04.
 * @sina CMOS_array
 */
public interface MyUserService {

    void createUser(String userName, String password, String userRoot, String accountNonExpired, String accountNonLocked, String credentialsNonExpired, String enabled);

    void updateUserInfoById(Long id, String userName, String password, String userRoot, String accountNonExpired, String accountNonLocked, String credentialsNonExpired, String enabled);

    void updateUserInfoByName(String userName, String password, String userRoot, String accountNonExpired, String accountNonLocked, String credentialsNonExpired, String enabled);

    void deleteUserInfoByName(String userName);

    String getPassWordByName(String userName);

    List<MyUser> getAllUserInfo();

    void deleteAllUserInfo();

}