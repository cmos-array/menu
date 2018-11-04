package com.didispace.security;

import com.didispace.domain.MyUser;
import com.didispace.service.MyUserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Configuration
public class UserDetailService implements UserDetailsService {

    @Autowired
    PasswordEncoder passwordEncoder;

 //   @Autowired
 //   MyUserServiceImpl myuserserviceimpl;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 模拟一个用户，替代数据库获取逻辑
        MyUser user = new MyUser();
     //   BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
     //   String passWordEncode = encoder.encode("123456");
        MyUserServiceImpl myuserserviceimpl = new MyUserServiceImpl();
     //   List<MyUser> aaa = myuserserviceimpl.getAllUserInfo();
        String passWordEncode = myuserserviceimpl.getPassWordByName(username);
        if( null != username && null != passWordEncode) {
            user.setUserName(username);
            user.setPassword(passWordEncode);
        }
     //   user.setPassword(this.passwordEncoder.encode("123456"));
        // 输出加密后的密码
        System.out.println(user.getPassword());

        return new User(username, user.getPassword(), user.isEnabled(),
                user.isAccountNonExpired(), user.isCredentialsNonExpired(),
                user.isAccountNonLocked(), AuthorityUtils.commaSeparatedStringToAuthorityList("admin"));
    }
}
