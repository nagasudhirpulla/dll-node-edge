// Overview of edge.js: http://tjanczuk.github.com/edge

var edge = require('../lib/edge')
    , http = require('http');

var getVoltage = edge.func(function() {/*
    using System;
    using System.Threading.Tasks;
    using System.Runtime.InteropServices;
    using System.Security.Principal;
    class Startup
    {
        [DllImport("advapi32.dll", SetLastError = true, CharSet = CharSet.Unicode)]
        public static extern bool LogonUser(string lpszUsername, string lpszDomain, string lpszPassword,
            int dwLogonType, int dwLogonProvider, out IntPtr phToken);
        [DllImport("kernel32.dll", CharSet = CharSet.Auto)]
        public extern static bool CloseHandle(IntPtr handle);
        public async Task<object> Invoke(dynamic input)
        {
            return await Task<object>.Run(() => { 
                IntPtr token;
                if (!Startup.LogonUser(input.user, null, input.password, 3, 0, out token))
                {
                    throw new System.ComponentModel.Win32Exception(Marshal.GetLastWin32Error());
                }
                try {
                    using (WindowsIdentity id = new WindowsIdentity(token))
                    {
                        return new {
                            name = id.Name,
                            sid = id.User.ToString()
                        };
                    }
                }
                finally {
                    Startup.CloseHandle(token);
                }
            });
        }
    }
*/});
