package com.huda.skinoren

import android.content.pm.ActivityInfo
import android.os.Bundle
import com.google.android.material.snackbar.Snackbar
import androidx.appcompat.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
import android.webkit.WebView

import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        this.requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE
        val url = "file:///android_asset/index.html"
        val browser = findViewById<WebView>(R.id.webview)
        browser.setInitialScale(1)
        browser.settings.javaScriptEnabled = true
        browser.settings.loadWithOverviewMode = true
        browser.settings.useWideViewPort = true
        browser.settings.builtInZoomControls = true
        browser.settings.setSupportZoom(true)
        browser.settings.displayZoomControls = true
        browser.scrollBarStyle = WebView.SCROLLBARS_OUTSIDE_OVERLAY
        browser.isScrollbarFadingEnabled = false
        browser.loadUrl(url)
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        // Inflate the menu; this adds items to the action bar if it is present.
        menuInflater.inflate(R.menu.menu_main, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        return when (item.itemId) {
            R.id.action_settings -> true
            else -> super.onOptionsItemSelected(item)
        }
    }
}
